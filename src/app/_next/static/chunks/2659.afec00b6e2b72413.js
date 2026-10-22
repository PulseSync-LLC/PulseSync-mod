'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2659],
    {
        12659: (e, t, r) => {
            r.d(t, { initBrowserMetrics: () => te });
            var i,
                s,
                a,
                n,
                o,
                c,
                l,
                u,
                h = r(17117);
            !(function (e) {
                ((e[(e.DELTA = 0)] = 'DELTA'), (e[(e.CUMULATIVE = 1)] = 'CUMULATIVE'));
            })(i || (i = {}));
            var m = r(36715);
            !(function (e) {
                ((e[(e.DROP = 0)] = 'DROP'),
                    (e[(e.SUM = 1)] = 'SUM'),
                    (e[(e.LAST_VALUE = 2)] = 'LAST_VALUE'),
                    (e[(e.HISTOGRAM = 3)] = 'HISTOGRAM'),
                    (e[(e.EXPONENTIAL_HISTOGRAM = 4)] = 'EXPONENTIAL_HISTOGRAM'));
            })(s || (s = {}));
            class _ {
                kind = s.DROP;
                createAccumulation() {}
                merge(e, t) {}
                diff(e, t) {}
                toMetricData(e, t, r, i) {}
            }
            (!(function (e) {
                ((e.COUNTER = 'COUNTER'),
                    (e.GAUGE = 'GAUGE'),
                    (e.HISTOGRAM = 'HISTOGRAM'),
                    (e.UP_DOWN_COUNTER = 'UP_DOWN_COUNTER'),
                    (e.OBSERVABLE_COUNTER = 'OBSERVABLE_COUNTER'),
                    (e.OBSERVABLE_GAUGE = 'OBSERVABLE_GAUGE'),
                    (e.OBSERVABLE_UP_DOWN_COUNTER = 'OBSERVABLE_UP_DOWN_COUNTER'));
            })(a || (a = {})),
                (function (e) {
                    ((e[(e.HISTOGRAM = 0)] = 'HISTOGRAM'),
                        (e[(e.EXPONENTIAL_HISTOGRAM = 1)] = 'EXPONENTIAL_HISTOGRAM'),
                        (e[(e.GAUGE = 2)] = 'GAUGE'),
                        (e[(e.SUM = 3)] = 'SUM'));
                })(n || (n = {})));
            class d {
                startTime;
                monotonic;
                _current;
                reset;
                constructor(e, t, r = 0, i = !1) {
                    ((this.startTime = e), (this.monotonic = t), (this._current = r), (this.reset = i));
                }
                record(e) {
                    (this.monotonic && e < 0) || (this._current += e);
                }
                setStartTime(e) {
                    this.startTime = e;
                }
                toPointValue() {
                    return this._current;
                }
            }
            class g {
                kind = s.SUM;
                monotonic;
                constructor(e) {
                    this.monotonic = e;
                }
                createAccumulation(e) {
                    return new d(e, this.monotonic);
                }
                merge(e, t) {
                    let r = e.toPointValue(),
                        i = t.toPointValue();
                    return t.reset ? new d(t.startTime, this.monotonic, i, t.reset) : new d(e.startTime, this.monotonic, r + i);
                }
                diff(e, t) {
                    let r = e.toPointValue(),
                        i = t.toPointValue();
                    return this.monotonic && r > i ? new d(t.startTime, this.monotonic, i, !0) : new d(t.startTime, this.monotonic, i - r);
                }
                toMetricData(e, t, r, i) {
                    return {
                        descriptor: e,
                        aggregationTemporality: t,
                        dataPointType: n.SUM,
                        dataPoints: r.map(([e, t]) => ({ attributes: e, startTime: t.startTime, endTime: i, value: t.toPointValue() })),
                        isMonotonic: this.monotonic,
                    };
                }
            }
            var p = r(99785);
            class f {
                startTime;
                _current;
                sampleTime;
                constructor(e, t = 0, r = [0, 0]) {
                    ((this.startTime = e), (this._current = t), (this.sampleTime = r));
                }
                record(e) {
                    ((this._current = e), (this.sampleTime = (0, p.lg)(Date.now())));
                }
                setStartTime(e) {
                    this.startTime = e;
                }
                toPointValue() {
                    return this._current;
                }
            }
            class S {
                kind = s.LAST_VALUE;
                createAccumulation(e) {
                    return new f(e);
                }
                merge(e, t) {
                    let r = (0, p.w_)(t.sampleTime) >= (0, p.w_)(e.sampleTime) ? t : e;
                    return new f(e.startTime, r.toPointValue(), r.sampleTime);
                }
                diff(e, t) {
                    let r = (0, p.w_)(t.sampleTime) >= (0, p.w_)(e.sampleTime) ? t : e;
                    return new f(t.startTime, r.toPointValue(), r.sampleTime);
                }
                toMetricData(e, t, r, i) {
                    return {
                        descriptor: e,
                        aggregationTemporality: t,
                        dataPointType: n.GAUGE,
                        dataPoints: r.map(([e, t]) => ({ attributes: e, startTime: t.startTime, endTime: i, value: t.toPointValue() })),
                    };
                }
            }
            function w(e) {
                let t = Object.keys(e);
                return 0 === t.length ? '' : JSON.stringify((t = t.sort()).map((t) => [t, e[t]]));
            }
            class T extends Error {
                constructor(e) {
                    (super(e), Object.setPrototypeOf(this, T.prototype));
                }
            }
            function M(e, t) {
                let r;
                return Promise.race([
                    e,
                    new Promise(function (e, i) {
                        r = setTimeout(function () {
                            i(new T('Operation timed out.'));
                        }, t);
                    }),
                ]).then(
                    (e) => (clearTimeout(r), e),
                    (e) => {
                        throw (clearTimeout(r), e);
                    },
                );
            }
            class v {
                startTime;
                _boundaries;
                _recordMinMax;
                _current;
                constructor(
                    e,
                    t,
                    r = !0,
                    i = (function (e) {
                        let t = e.map(() => 0);
                        return (t.push(0), { buckets: { boundaries: e, counts: t }, sum: 0, count: 0, hasMinMax: !1, min: 1 / 0, max: -1 / 0 });
                    })(t),
                ) {
                    ((this.startTime = e), (this._boundaries = t), (this._recordMinMax = r), (this._current = i));
                }
                record(e) {
                    if (Number.isNaN(e)) return;
                    ((this._current.count += 1),
                        (this._current.sum += e),
                        this._recordMinMax &&
                            ((this._current.min = Math.min(e, this._current.min)), (this._current.max = Math.max(e, this._current.max)), (this._current.hasMinMax = !0)));
                    let t = (function (e, t) {
                        let r = 0,
                            i = e.length - 1,
                            s = e.length;
                        for (; i >= r;) {
                            let a = r + Math.trunc((i - r) / 2);
                            e[a] < t ? (r = a + 1) : ((s = a), (i = a - 1));
                        }
                        return s;
                    })(this._boundaries, e);
                    this._current.buckets.counts[t] += 1;
                }
                setStartTime(e) {
                    this.startTime = e;
                }
                toPointValue() {
                    return this._current;
                }
            }
            class E {
                kind = s.HISTOGRAM;
                _boundaries;
                _recordMinMax;
                constructor(e, t) {
                    ((this._boundaries = e), (this._recordMinMax = t));
                }
                createAccumulation(e) {
                    return new v(e, this._boundaries, this._recordMinMax);
                }
                merge(e, t) {
                    let r = e.toPointValue(),
                        i = t.toPointValue(),
                        s = r.buckets.counts,
                        a = i.buckets.counts,
                        n = Array(s.length);
                    for (let e = 0; e < s.length; e++) n[e] = s[e] + a[e];
                    let o = 1 / 0,
                        c = -1 / 0;
                    return (
                        this._recordMinMax &&
                            (r.hasMinMax && i.hasMinMax
                                ? ((o = Math.min(r.min, i.min)), (c = Math.max(r.max, i.max)))
                                : r.hasMinMax
                                  ? ((o = r.min), (c = r.max))
                                  : i.hasMinMax && ((o = i.min), (c = i.max))),
                        new v(e.startTime, r.buckets.boundaries, this._recordMinMax, {
                            buckets: { boundaries: r.buckets.boundaries, counts: n },
                            count: r.count + i.count,
                            sum: r.sum + i.sum,
                            hasMinMax: this._recordMinMax && (r.hasMinMax || i.hasMinMax),
                            min: o,
                            max: c,
                        })
                    );
                }
                diff(e, t) {
                    let r = e.toPointValue(),
                        i = t.toPointValue(),
                        s = r.buckets.counts,
                        a = i.buckets.counts,
                        n = Array(s.length);
                    for (let e = 0; e < s.length; e++) n[e] = a[e] - s[e];
                    return new v(t.startTime, r.buckets.boundaries, this._recordMinMax, {
                        buckets: { boundaries: r.buckets.boundaries, counts: n },
                        count: i.count - r.count,
                        sum: i.sum - r.sum,
                        hasMinMax: !1,
                        min: 1 / 0,
                        max: -1 / 0,
                    });
                }
                toMetricData(e, t, r, i) {
                    return {
                        descriptor: e,
                        aggregationTemporality: t,
                        dataPointType: n.HISTOGRAM,
                        dataPoints: r.map(([t, r]) => {
                            let s = r.toPointValue(),
                                n = e.type === a.GAUGE || e.type === a.UP_DOWN_COUNTER || e.type === a.OBSERVABLE_GAUGE || e.type === a.OBSERVABLE_UP_DOWN_COUNTER;
                            return {
                                attributes: t,
                                startTime: r.startTime,
                                endTime: i,
                                value: {
                                    min: s.hasMinMax ? s.min : void 0,
                                    max: s.hasMinMax ? s.max : void 0,
                                    sum: n ? void 0 : s.sum,
                                    buckets: s.buckets,
                                    count: s.count,
                                },
                            };
                        }),
                    };
                }
            }
            class b {
                backing;
                indexBase;
                indexStart;
                indexEnd;
                constructor(e = new x(), t = 0, r = 0, i = 0) {
                    ((this.backing = e), (this.indexBase = t), (this.indexStart = r), (this.indexEnd = i));
                }
                get offset() {
                    return this.indexStart;
                }
                get length() {
                    return 0 === this.backing.length || (this.indexEnd === this.indexStart && 0 === this.at(0)) ? 0 : this.indexEnd - this.indexStart + 1;
                }
                counts() {
                    return Array.from({ length: this.length }, (e, t) => this.at(t));
                }
                at(e) {
                    let t = this.indexBase - this.indexStart;
                    return (e < t && (e += this.backing.length), (e -= t), this.backing.countAt(e));
                }
                incrementBucket(e, t) {
                    this.backing.increment(e, t);
                }
                decrementBucket(e, t) {
                    this.backing.decrement(e, t);
                }
                trim() {
                    for (let e = 0; e < this.length; e++)
                        if (0 !== this.at(e)) {
                            this.indexStart += e;
                            break;
                        } else if (e === this.length - 1) {
                            this.indexStart = this.indexEnd = this.indexBase = 0;
                            return;
                        }
                    for (let e = this.length - 1; e >= 0; e--)
                        if (0 !== this.at(e)) {
                            this.indexEnd -= this.length - e - 1;
                            break;
                        }
                    this._rotate();
                }
                downscale(e) {
                    this._rotate();
                    let t = 1 + this.indexEnd - this.indexStart,
                        r = 1 << e,
                        i = 0,
                        s = 0;
                    for (let e = this.indexStart; e <= this.indexEnd;) {
                        let a = e % r;
                        a < 0 && (a += r);
                        for (let n = a; n < r && i < t; n++) (this._relocateBucket(s, i), i++, e++);
                        s++;
                    }
                    ((this.indexStart >>= e), (this.indexEnd >>= e), (this.indexBase = this.indexStart));
                }
                clone() {
                    return new b(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
                }
                _rotate() {
                    let e = this.indexBase - this.indexStart;
                    0 !== e &&
                        (e > 0
                            ? (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, e), this.backing.reverse(e, this.backing.length))
                            : (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + e)),
                        (this.indexBase = this.indexStart));
                }
                _relocateBucket(e, t) {
                    e !== t && this.incrementBucket(e, this.backing.emptyBucket(t));
                }
            }
            class x {
                _counts;
                constructor(e = [0]) {
                    this._counts = e;
                }
                get length() {
                    return this._counts.length;
                }
                countAt(e) {
                    return this._counts[e];
                }
                growTo(e, t, r) {
                    let i = Array(e).fill(0);
                    (i.splice(r, this._counts.length - t, ...this._counts.slice(t)), i.splice(0, t, ...this._counts.slice(0, t)), (this._counts = i));
                }
                reverse(e, t) {
                    let r = Math.floor((e + t) / 2) - e;
                    for (let i = 0; i < r; i++) {
                        let r = this._counts[e + i];
                        ((this._counts[e + i] = this._counts[t - i - 1]), (this._counts[t - i - 1] = r));
                    }
                }
                emptyBucket(e) {
                    let t = this._counts[e];
                    return ((this._counts[e] = 0), t);
                }
                increment(e, t) {
                    this._counts[e] += t;
                }
                decrement(e, t) {
                    this._counts[e] >= t ? (this._counts[e] -= t) : (this._counts[e] = 0);
                }
                clone() {
                    return new x([...this._counts]);
                }
            }
            function A(e) {
                let t = new DataView(new ArrayBuffer(8));
                return (t.setFloat64(0, e), ((0x7ff00000 & t.getUint32(0)) >> 20) - 1023);
            }
            function y(e) {
                let t = new DataView(new ArrayBuffer(8));
                t.setFloat64(0, e);
                let r = t.getUint32(0);
                return (1048575 & r) * 0x100000000 + t.getUint32(4);
            }
            function O(e, t) {
                return 0 === e || e === 1 / 0 || e === -1 / 0 || Number.isNaN(e) ? e : e * Math.pow(2, t);
            }
            class C extends Error {}
            class U {
                _shift;
                constructor(e) {
                    this._shift = -e;
                }
                mapToIndex(e) {
                    return e < 22250738585072014e-324 ? this._minNormalLowerBoundaryIndex() : (A(e) + this._rightShift(y(e) - 1, 52)) >> this._shift;
                }
                lowerBoundary(e) {
                    let t = this._minNormalLowerBoundaryIndex();
                    if (e < t) throw new C(`underflow: ${e} is < minimum lower boundary: ${t}`);
                    let r = this._maxNormalLowerBoundaryIndex();
                    if (e > r) throw new C(`overflow: ${e} is > maximum lower boundary: ${r}`);
                    return O(1, e << this._shift);
                }
                get scale() {
                    return 0 === this._shift ? 0 : -this._shift;
                }
                _minNormalLowerBoundaryIndex() {
                    let e = -1022 >> this._shift;
                    return (this._shift < 2 && e--, e);
                }
                _maxNormalLowerBoundaryIndex() {
                    return 1023 >> this._shift;
                }
                _rightShift(e, t) {
                    return Math.floor(e * Math.pow(2, -t));
                }
            }
            class N {
                _scale;
                _scaleFactor;
                _inverseFactor;
                constructor(e) {
                    ((this._scale = e), (this._scaleFactor = O(Math.LOG2E, e)), (this._inverseFactor = O(Math.LN2, -e)));
                }
                mapToIndex(e) {
                    if (e <= 22250738585072014e-324) return this._minNormalLowerBoundaryIndex() - 1;
                    if (0 === y(e)) return (A(e) << this._scale) - 1;
                    let t = Math.floor(Math.log(e) * this._scaleFactor),
                        r = this._maxNormalLowerBoundaryIndex();
                    return t >= r ? r : t;
                }
                lowerBoundary(e) {
                    let t = this._maxNormalLowerBoundaryIndex();
                    if (e >= t) {
                        if (e === t) return 2 * Math.exp((e - (1 << this._scale)) / this._scaleFactor);
                        throw new C(`overflow: ${e} is > maximum lower boundary: ${t}`);
                    }
                    let r = this._minNormalLowerBoundaryIndex();
                    if (e <= r) {
                        if (e === r) return 22250738585072014e-324;
                        if (e === r - 1) return Math.exp((e + (1 << this._scale)) / this._scaleFactor) / 2;
                        throw new C(`overflow: ${e} is < minimum lower boundary: ${r}`);
                    }
                    return Math.exp(e * this._inverseFactor);
                }
                get scale() {
                    return this._scale;
                }
                _minNormalLowerBoundaryIndex() {
                    return -1022 << this._scale;
                }
                _maxNormalLowerBoundaryIndex() {
                    return (1024 << this._scale) - 1;
                }
            }
            let R = Array.from({ length: 31 }, (e, t) => (t > 10 ? new N(t - 10) : new U(t - 10)));
            function I(e) {
                if (e > 20 || e < -10) throw new C(`expected scale >= -10 && <= 20, got: ${e}`);
                return R[e + 10];
            }
            class L {
                static combine(e, t) {
                    return new L(Math.min(e.low, t.low), Math.max(e.high, t.high));
                }
                low;
                high;
                constructor(e, t) {
                    ((this.low = e), (this.high = t));
                }
            }
            class P {
                startTime;
                _maxSize;
                _recordMinMax;
                _sum;
                _count;
                _zeroCount;
                _min;
                _max;
                _positive;
                _negative;
                _mapping;
                constructor(e, t = 160, r = !0, i = 0, s = 0, a = 0, n = 1 / 0, o = -1 / 0, c = new b(), l = new b(), u = I(20)) {
                    ((this.startTime = e),
                        (this._maxSize = t),
                        (this._recordMinMax = r),
                        (this._sum = i),
                        (this._count = s),
                        (this._zeroCount = a),
                        (this._min = n),
                        (this._max = o),
                        (this._positive = c),
                        (this._negative = l),
                        (this._mapping = u),
                        this._maxSize < 2 &&
                            (m.s.warn(`Exponential Histogram Max Size set to ${this._maxSize}, \
                changing to the minimum size of: 2`),
                            (this._maxSize = 2)));
                }
                record(e) {
                    this.updateByIncrement(e, 1);
                }
                setStartTime(e) {
                    this.startTime = e;
                }
                toPointValue() {
                    return {
                        hasMinMax: this._recordMinMax,
                        min: this.min,
                        max: this.max,
                        sum: this.sum,
                        positive: { offset: this.positive.offset, bucketCounts: this.positive.counts() },
                        negative: { offset: this.negative.offset, bucketCounts: this.negative.counts() },
                        count: this.count,
                        scale: this.scale,
                        zeroCount: this.zeroCount,
                    };
                }
                get sum() {
                    return this._sum;
                }
                get min() {
                    return this._min;
                }
                get max() {
                    return this._max;
                }
                get count() {
                    return this._count;
                }
                get zeroCount() {
                    return this._zeroCount;
                }
                get scale() {
                    return this._count === this._zeroCount ? 0 : this._mapping.scale;
                }
                get positive() {
                    return this._positive;
                }
                get negative() {
                    return this._negative;
                }
                updateByIncrement(e, t) {
                    if (!Number.isNaN(e)) {
                        if ((e > this._max && (this._max = e), e < this._min && (this._min = e), (this._count += t), 0 === e)) {
                            this._zeroCount += t;
                            return;
                        }
                        ((this._sum += e * t), e > 0 ? this._updateBuckets(this._positive, e, t) : this._updateBuckets(this._negative, -e, t));
                    }
                }
                merge(e) {
                    (0 === this._count
                        ? ((this._min = e.min), (this._max = e.max))
                        : 0 !== e.count && (e.min < this.min && (this._min = e.min), e.max > this.max && (this._max = e.max)),
                        (this.startTime = e.startTime),
                        (this._sum += e.sum),
                        (this._count += e.count),
                        (this._zeroCount += e.zeroCount));
                    let t = this._minScale(e);
                    (this._downscale(this.scale - t), this._mergeBuckets(this.positive, e, e.positive, t), this._mergeBuckets(this.negative, e, e.negative, t));
                }
                diff(e) {
                    ((this._min = 1 / 0), (this._max = -1 / 0), (this._sum -= e.sum), (this._count -= e.count), (this._zeroCount -= e.zeroCount));
                    let t = this._minScale(e);
                    (this._downscale(this.scale - t), this._diffBuckets(this.positive, e, e.positive, t), this._diffBuckets(this.negative, e, e.negative, t));
                }
                clone() {
                    return new P(
                        this.startTime,
                        this._maxSize,
                        this._recordMinMax,
                        this._sum,
                        this._count,
                        this._zeroCount,
                        this._min,
                        this._max,
                        this.positive.clone(),
                        this.negative.clone(),
                        this._mapping,
                    );
                }
                _updateBuckets(e, t, r) {
                    let i = this._mapping.mapToIndex(t),
                        s = !1,
                        a = 0,
                        n = 0;
                    if (
                        (0 === e.length
                            ? ((e.indexStart = i), (e.indexEnd = e.indexStart), (e.indexBase = e.indexStart))
                            : i < e.indexStart && e.indexEnd - i >= this._maxSize
                              ? ((s = !0), (n = i), (a = e.indexEnd))
                              : i > e.indexEnd && i - e.indexStart >= this._maxSize && ((s = !0), (n = e.indexStart), (a = i)),
                        s)
                    ) {
                        let e = this._changeScale(a, n);
                        (this._downscale(e), (i = this._mapping.mapToIndex(t)));
                    }
                    this._incrementIndexBy(e, i, r);
                }
                _incrementIndexBy(e, t, r) {
                    if (0 === r) return;
                    if ((0 === e.length && (e.indexStart = e.indexEnd = e.indexBase = t), t < e.indexStart)) {
                        let r = e.indexEnd - t;
                        (r >= e.backing.length && this._grow(e, r + 1), (e.indexStart = t));
                    } else if (t > e.indexEnd) {
                        let r = t - e.indexStart;
                        (r >= e.backing.length && this._grow(e, r + 1), (e.indexEnd = t));
                    }
                    let i = t - e.indexBase;
                    (i < 0 && (i += e.backing.length), e.incrementBucket(i, r));
                }
                _grow(e, t) {
                    var r;
                    let i = e.backing.length,
                        s = e.indexBase - e.indexStart,
                        a = ((r = t), r--, (r |= r >> 1), (r |= r >> 2), (r |= r >> 4), (r |= r >> 8), (r |= r >> 16), ++r);
                    a > this._maxSize && (a = this._maxSize);
                    let n = a - s;
                    e.backing.growTo(a, i - s, n);
                }
                _changeScale(e, t) {
                    let r = 0;
                    for (; e - t >= this._maxSize;) ((e >>= 1), (t >>= 1), r++);
                    return r;
                }
                _downscale(e) {
                    if (0 === e) return;
                    if (e < 0) throw Error(`impossible change of scale: ${this.scale}`);
                    let t = this._mapping.scale - e;
                    (this._positive.downscale(e), this._negative.downscale(e), (this._mapping = I(t)));
                }
                _minScale(e) {
                    let t = Math.min(this.scale, e.scale),
                        r = L.combine(this._highLowAtScale(this.positive, this.scale, t), this._highLowAtScale(e.positive, e.scale, t)),
                        i = L.combine(this._highLowAtScale(this.negative, this.scale, t), this._highLowAtScale(e.negative, e.scale, t));
                    return Math.min(t - this._changeScale(r.high, r.low), t - this._changeScale(i.high, i.low));
                }
                _highLowAtScale(e, t, r) {
                    if (0 === e.length) return new L(0, -1);
                    let i = t - r;
                    return new L(e.indexStart >> i, e.indexEnd >> i);
                }
                _mergeBuckets(e, t, r, i) {
                    let s = r.offset,
                        a = t.scale - i;
                    for (let t = 0; t < r.length; t++) this._incrementIndexBy(e, (s + t) >> a, r.at(t));
                }
                _diffBuckets(e, t, r, i) {
                    let s = r.offset,
                        a = t.scale - i;
                    for (let t = 0; t < r.length; t++) {
                        let i = ((s + t) >> a) - e.indexBase;
                        (i < 0 && (i += e.backing.length), e.decrementBucket(i, r.at(t)));
                    }
                    e.trim();
                }
            }
            class k {
                kind = s.EXPONENTIAL_HISTOGRAM;
                _maxSize;
                _recordMinMax;
                constructor(e, t) {
                    ((this._maxSize = e), (this._recordMinMax = t));
                }
                createAccumulation(e) {
                    return new P(e, this._maxSize, this._recordMinMax);
                }
                merge(e, t) {
                    let r = t.clone();
                    return (r.merge(e), r);
                }
                diff(e, t) {
                    let r = t.clone();
                    return (r.diff(e), r);
                }
                toMetricData(e, t, r, i) {
                    return {
                        descriptor: e,
                        aggregationTemporality: t,
                        dataPointType: n.EXPONENTIAL_HISTOGRAM,
                        dataPoints: r.map(([t, r]) => {
                            let s = r.toPointValue(),
                                n = e.type === a.GAUGE || e.type === a.UP_DOWN_COUNTER || e.type === a.OBSERVABLE_GAUGE || e.type === a.OBSERVABLE_UP_DOWN_COUNTER;
                            return {
                                attributes: t,
                                startTime: r.startTime,
                                endTime: i,
                                value: {
                                    min: s.hasMinMax ? s.min : void 0,
                                    max: s.hasMinMax ? s.max : void 0,
                                    sum: n ? void 0 : s.sum,
                                    positive: { offset: s.positive.offset, bucketCounts: s.positive.bucketCounts },
                                    negative: { offset: s.negative.offset, bucketCounts: s.negative.bucketCounts },
                                    count: s.count,
                                    scale: s.scale,
                                    zeroCount: s.zeroCount,
                                },
                            };
                        }),
                    };
                }
            }
            class B {
                static DEFAULT_INSTANCE = new _();
                createAggregator(e) {
                    return B.DEFAULT_INSTANCE;
                }
            }
            class G {
                static MONOTONIC_INSTANCE = new g(!0);
                static NON_MONOTONIC_INSTANCE = new g(!1);
                createAggregator(e) {
                    switch (e.type) {
                        case a.COUNTER:
                        case a.OBSERVABLE_COUNTER:
                        case a.HISTOGRAM:
                            return G.MONOTONIC_INSTANCE;
                        default:
                            return G.NON_MONOTONIC_INSTANCE;
                    }
                }
            }
            class D {
                static DEFAULT_INSTANCE = new S();
                createAggregator(e) {
                    return D.DEFAULT_INSTANCE;
                }
            }
            class V {
                static DEFAULT_INSTANCE = new E([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4], !0);
                createAggregator(e) {
                    return V.DEFAULT_INSTANCE;
                }
            }
            class F {
                _boundaries;
                _recordMinMax;
                constructor(e, t = !0) {
                    if (null == e)
                        throw Error(
                            'ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array',
                        );
                    let r = (e = (e = e.concat()).sort((e, t) => e - t)).lastIndexOf(-1 / 0),
                        i = e.indexOf(1 / 0);
                    (-1 === i && (i = void 0), (this._boundaries = e.slice(r + 1, i)), (this._recordMinMax = t));
                }
                createAggregator(e) {
                    return new E(this._boundaries, this._recordMinMax);
                }
            }
            class $ {
                _maxSize;
                _recordMinMax;
                constructor(e = 160, t = !0) {
                    ((this._maxSize = e), (this._recordMinMax = t));
                }
                createAggregator(e) {
                    return new k(this._maxSize, this._recordMinMax);
                }
            }
            class z {
                _resolve(e) {
                    switch (e.type) {
                        case a.COUNTER:
                        case a.UP_DOWN_COUNTER:
                        case a.OBSERVABLE_COUNTER:
                        case a.OBSERVABLE_UP_DOWN_COUNTER:
                            return W;
                        case a.GAUGE:
                        case a.OBSERVABLE_GAUGE:
                            return X;
                        case a.HISTOGRAM:
                            if (e.advice.explicitBucketBoundaries) return new F(e.advice.explicitBucketBoundaries);
                            return Y;
                    }
                    return (m.s.warn(`Unable to recognize instrument type: ${e.type}`), H);
                }
                createAggregator(e) {
                    return this._resolve(e).createAggregator(e);
                }
            }
            let H = new B(),
                W = new G(),
                X = new D(),
                Y = new V();
            new $();
            let J = new z();
            function j(e) {
                switch (e.type) {
                    case o.DEFAULT:
                        return J;
                    case o.DROP:
                        return H;
                    case o.SUM:
                        return W;
                    case o.LAST_VALUE:
                        return X;
                    case o.EXPONENTIAL_HISTOGRAM:
                        return new $(e.options?.maxSize, e.options?.recordMinMax);
                    case o.EXPLICIT_BUCKET_HISTOGRAM:
                        if (null == e.options) return Y;
                        return new F(e.options?.boundaries, e.options?.recordMinMax);
                    default:
                        throw Error('Unsupported Aggregation');
                }
            }
            !(function (e) {
                ((e[(e.DEFAULT = 0)] = 'DEFAULT'),
                    (e[(e.DROP = 1)] = 'DROP'),
                    (e[(e.SUM = 2)] = 'SUM'),
                    (e[(e.LAST_VALUE = 3)] = 'LAST_VALUE'),
                    (e[(e.EXPLICIT_BUCKET_HISTOGRAM = 4)] = 'EXPLICIT_BUCKET_HISTOGRAM'),
                    (e[(e.EXPONENTIAL_HISTOGRAM = 5)] = 'EXPONENTIAL_HISTOGRAM'));
            })(o || (o = {}));
            let q = (e) => ({ type: o.DEFAULT }),
                Z = (e) => i.CUMULATIVE;
            class K {
                _shutdown = !1;
                _temporalitySelector;
                constructor(e) {
                    this._temporalitySelector = e?.temporalitySelector ?? Z;
                }
                export(e, t) {
                    return this._shutdown ? void t({ code: h.V.FAILED }) : K._sendMetrics(e, t);
                }
                forceFlush() {
                    return Promise.resolve();
                }
                selectAggregationTemporality(e) {
                    return this._temporalitySelector(e);
                }
                shutdown() {
                    return ((this._shutdown = !0), Promise.resolve());
                }
                static _sendMetrics(e, t) {
                    for (let t of e.scopeMetrics)
                        for (let e of t.metrics) console.dir({ descriptor: e.descriptor, dataPointType: e.dataPointType, dataPoints: e.dataPoints }, { depth: null });
                    t({ code: h.V.SUCCESS });
                }
            }
            var Q = r(20829),
                ee = r(68643);
            class et {
                _shutdown = !1;
                _metricProducers;
                _sdkMetricProducer;
                _aggregationTemporalitySelector;
                _aggregationSelector;
                _cardinalitySelector;
                constructor(e) {
                    ((this._aggregationSelector = e?.aggregationSelector ?? q),
                        (this._aggregationTemporalitySelector = e?.aggregationTemporalitySelector ?? Z),
                        (this._metricProducers = e?.metricProducers ?? []),
                        (this._cardinalitySelector = e?.cardinalitySelector));
                }
                setMetricProducer(e) {
                    if (this._sdkMetricProducer) throw Error('MetricReader can not be bound to a MeterProvider again.');
                    ((this._sdkMetricProducer = e), this.onInitialized());
                }
                selectAggregation(e) {
                    return this._aggregationSelector(e);
                }
                selectAggregationTemporality(e) {
                    return this._aggregationTemporalitySelector(e);
                }
                selectCardinalityLimit(e) {
                    return this._cardinalitySelector ? this._cardinalitySelector(e) : 2e3;
                }
                onInitialized() {}
                async collect(e) {
                    if (void 0 === this._sdkMetricProducer) throw Error('MetricReader is not bound to a MetricProducer');
                    if (this._shutdown) throw Error('MetricReader is shutdown');
                    let [t, ...r] = await Promise.all([
                            this._sdkMetricProducer.collect({ timeoutMillis: e?.timeoutMillis }),
                            ...this._metricProducers.map((t) => t.collect({ timeoutMillis: e?.timeoutMillis })),
                        ]),
                        i = t.errors.concat(r.flatMap((e) => e.errors));
                    return {
                        resourceMetrics: {
                            resource: t.resourceMetrics.resource,
                            scopeMetrics: t.resourceMetrics.scopeMetrics.concat(r.flatMap((e) => e.resourceMetrics.scopeMetrics)),
                        },
                        errors: i,
                    };
                }
                async shutdown(e) {
                    if (this._shutdown) return void m.s.error('Cannot call shutdown twice.');
                    (e?.timeoutMillis == null ? await this.onShutdown() : await M(this.onShutdown(), e.timeoutMillis), (this._shutdown = !0));
                }
                async forceFlush(e) {
                    return this._shutdown
                        ? void m.s.warn('Cannot forceFlush on already shutdown MetricReader.')
                        : e?.timeoutMillis == null
                          ? void (await this.onForceFlush())
                          : void (await M(this.onForceFlush(), e.timeoutMillis));
                }
            }
            class er extends et {
                _interval;
                _exporter;
                _exportInterval;
                _exportTimeout;
                constructor(e) {
                    let { exporter: t, exportIntervalMillis: r = 6e4, metricProducers: i, cardinalityLimits: s } = e,
                        { exportTimeoutMillis: n = 3e4 } = e;
                    if (
                        (super({
                            aggregationSelector: t.selectAggregation?.bind(t),
                            aggregationTemporalitySelector: t.selectAggregationTemporality?.bind(t),
                            metricProducers: i,
                            cardinalitySelector: (e) => {
                                let t = { default: 2e3, ...s };
                                switch (e) {
                                    case a.COUNTER:
                                        return t.counter ?? t.default;
                                    case a.GAUGE:
                                        return t.gauge ?? t.default;
                                    case a.HISTOGRAM:
                                        return t.histogram ?? t.default;
                                    case a.OBSERVABLE_COUNTER:
                                        return t.observableCounter ?? t.default;
                                    case a.OBSERVABLE_UP_DOWN_COUNTER:
                                        return t.observableUpDownCounter ?? t.default;
                                    case a.OBSERVABLE_GAUGE:
                                        return t.observableGauge ?? t.default;
                                    case a.UP_DOWN_COUNTER:
                                        return t.upDownCounter ?? t.default;
                                    default:
                                        return t.default;
                                }
                            },
                        }),
                        r <= 0)
                    )
                        throw Error('exportIntervalMillis must be greater than 0');
                    if (n <= 0) throw Error('exportTimeoutMillis must be greater than 0');
                    if (r < n)
                        if ('exportIntervalMillis' in e && 'exportTimeoutMillis' in e)
                            throw Error('exportIntervalMillis must be greater than or equal to exportTimeoutMillis');
                        else (m.s.info(`Timeout of ${n} exceeds the interval of ${r}. Clamping timeout to interval duration.`), (n = r));
                    ((this._exportInterval = r), (this._exportTimeout = n), (this._exporter = t));
                }
                async _runOnce() {
                    try {
                        await M(this._doRun(), this._exportTimeout);
                    } catch (e) {
                        if (e instanceof T) return void m.s.error('Export took longer than %s milliseconds and timed out.', this._exportTimeout);
                        (0, Q.s)(e);
                    }
                }
                async _doRun() {
                    let { resourceMetrics: e, errors: t } = await this.collect({ timeoutMillis: this._exportTimeout });
                    if ((t.length > 0 && m.s.error('PeriodicExportingMetricReader: metrics collection errors', ...t), e.resource.asyncAttributesPending))
                        try {
                            await e.resource.waitForAsyncAttributes?.();
                        } catch (e) {
                            (m.s.debug('Error while resolving async portion of resource: ', e), (0, Q.s)(e));
                        }
                    if (0 === e.scopeMetrics.length) return;
                    let r = await ee.mM._export(this._exporter, e);
                    if (r.code !== h.V.SUCCESS) throw Error(`PeriodicExportingMetricReader: metrics export failed (error ${r.error})`);
                }
                onInitialized() {
                    ((this._interval = setInterval(() => {
                        this._runOnce();
                    }, this._exportInterval)),
                        'number' != typeof this._interval && this._interval.unref());
                }
                async onForceFlush() {
                    (await this._runOnce(), await this._exporter.forceFlush());
                }
                async onShutdown() {
                    (this._interval && clearInterval(this._interval), await this.onForceFlush(), await this._exporter.shutdown());
                }
            }
            var ei = class extends er {
                    selectAggregationTemporality(e) {
                        return e === a.COUNTER || e === a.OBSERVABLE_COUNTER ? i.DELTA : i.CUMULATIVE;
                    }
                },
                es = r(47436),
                ea = r(30850),
                en = r(20636),
                eo = r(71730);
            class ec {
                _registeredViews = [];
                addView(e) {
                    this._registeredViews.push(e);
                }
                findViews(e, t) {
                    return this._registeredViews.filter((r) => this._matchInstrument(r.instrumentSelector, e) && this._matchMeter(r.meterSelector, t));
                }
                _matchInstrument(e, t) {
                    return (void 0 === e.getType() || t.type === e.getType()) && e.getNameFilter().match(t.name) && e.getUnitFilter().match(t.unit);
                }
                _matchMeter(e, t) {
                    return (
                        e.getNameFilter().match(t.name) &&
                        (void 0 === t.version || e.getVersionFilter().match(t.version)) &&
                        (void 0 === t.schemaUrl || e.getSchemaUrlFilter().match(t.schemaUrl))
                    );
                }
            }
            function el(e, t, r) {
                return (
                    eu.test(e) || m.s.warn(`Invalid metric name: "${e}". The metric name should be a ASCII string with a length no greater than 255 characters.`),
                    { name: e, type: t, description: r?.description ?? '', unit: r?.unit ?? '', valueType: r?.valueType ?? c.DOUBLE, advice: r?.advice ?? {} }
                );
            }
            !(function (e) {
                ((e[(e.INT = 0)] = 'INT'), (e[(e.DOUBLE = 1)] = 'DOUBLE'));
            })(c || (c = {}));
            let eu = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
            var eh = r(36697);
            class em {
                _writableMetricStorage;
                _descriptor;
                constructor(e, t) {
                    ((this._writableMetricStorage = e), (this._descriptor = t));
                }
                _record(e, t = {}, r = eh._.active()) {
                    if ('number' != typeof e) return void m.s.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);
                    (this._descriptor.valueType !== c.INT ||
                        Number.isInteger(e) ||
                        (m.s.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`),
                        Number.isInteger((e = Math.trunc(e))))) &&
                        this._writableMetricStorage.record(e, t, r, (0, p.lg)(Date.now()));
                }
            }
            class e_ extends em {
                add(e, t, r) {
                    this._record(e, t, r);
                }
            }
            class ed extends em {
                add(e, t, r) {
                    if (e < 0) return void m.s.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);
                    this._record(e, t, r);
                }
            }
            class eg extends em {
                record(e, t, r) {
                    this._record(e, t, r);
                }
            }
            class ep extends em {
                record(e, t, r) {
                    if (e < 0) return void m.s.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);
                    this._record(e, t, r);
                }
            }
            class ef {
                _metricStorages;
                _descriptor;
                _observableRegistry;
                constructor(e, t, r) {
                    ((this._descriptor = e), (this._metricStorages = t), (this._observableRegistry = r));
                }
                addCallback(e) {
                    this._observableRegistry.addCallback(e, this);
                }
                removeCallback(e) {
                    this._observableRegistry.removeCallback(e, this);
                }
            }
            class eS extends ef {}
            class ew extends ef {}
            class eT extends ef {}
            function eM(e) {
                return e instanceof ef;
            }
            class ev {
                _meterSharedState;
                constructor(e) {
                    this._meterSharedState = e;
                }
                createGauge(e, t) {
                    let r = el(e, a.GAUGE, t);
                    return new eg(this._meterSharedState.registerMetricStorage(r), r);
                }
                createHistogram(e, t) {
                    let r = el(e, a.HISTOGRAM, t);
                    return new ep(this._meterSharedState.registerMetricStorage(r), r);
                }
                createCounter(e, t) {
                    let r = el(e, a.COUNTER, t);
                    return new ed(this._meterSharedState.registerMetricStorage(r), r);
                }
                createUpDownCounter(e, t) {
                    let r = el(e, a.UP_DOWN_COUNTER, t);
                    return new e_(this._meterSharedState.registerMetricStorage(r), r);
                }
                createObservableGauge(e, t) {
                    let r = el(e, a.OBSERVABLE_GAUGE, t),
                        i = this._meterSharedState.registerAsyncMetricStorage(r);
                    return new ew(r, i, this._meterSharedState.observableRegistry);
                }
                createObservableCounter(e, t) {
                    let r = el(e, a.OBSERVABLE_COUNTER, t),
                        i = this._meterSharedState.registerAsyncMetricStorage(r);
                    return new eS(r, i, this._meterSharedState.observableRegistry);
                }
                createObservableUpDownCounter(e, t) {
                    let r = el(e, a.OBSERVABLE_UP_DOWN_COUNTER, t),
                        i = this._meterSharedState.registerAsyncMetricStorage(r);
                    return new eT(r, i, this._meterSharedState.observableRegistry);
                }
                addBatchObservableCallback(e, t) {
                    this._meterSharedState.observableRegistry.addBatchCallback(e, t);
                }
                removeBatchObservableCallback(e, t) {
                    this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
                }
            }
            class eE {
                _instrumentDescriptor;
                constructor(e) {
                    this._instrumentDescriptor = e;
                }
                getInstrumentDescriptor() {
                    return this._instrumentDescriptor;
                }
                updateDescription(e) {
                    this._instrumentDescriptor = el(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
                        description: e,
                        valueType: this._instrumentDescriptor.valueType,
                        unit: this._instrumentDescriptor.unit,
                        advice: this._instrumentDescriptor.advice,
                    });
                }
            }
            class eb {
                _valueMap = new Map();
                _keyMap = new Map();
                _hash;
                constructor(e) {
                    this._hash = e;
                }
                get(e, t) {
                    return ((t ??= this._hash(e)), this._valueMap.get(t));
                }
                getOrDefault(e, t) {
                    let r = this._hash(e);
                    if (this._valueMap.has(r)) return this._valueMap.get(r);
                    let i = t();
                    return (this._keyMap.has(r) || this._keyMap.set(r, e), this._valueMap.set(r, i), i);
                }
                set(e, t, r) {
                    ((r ??= this._hash(e)), this._keyMap.has(r) || this._keyMap.set(r, e), this._valueMap.set(r, t));
                }
                has(e, t) {
                    return ((t ??= this._hash(e)), this._valueMap.has(t));
                }
                *keys() {
                    let e = this._keyMap.entries(),
                        t = e.next();
                    for (; !0 !== t.done;) (yield [t.value[1], t.value[0]], (t = e.next()));
                }
                *entries() {
                    let e = this._valueMap.entries(),
                        t = e.next();
                    for (; !0 !== t.done;) (yield [this._keyMap.get(t.value[0]), t.value[1], t.value[0]], (t = e.next()));
                }
                get size() {
                    return this._valueMap.size;
                }
            }
            class ex extends eb {
                constructor() {
                    super(w);
                }
            }
            class eA {
                _activeCollectionStorage = new ex();
                _cumulativeMemoStorage = new ex();
                _cardinalityLimit;
                _overflowAttributes = { 'otel.metric.overflow': !0 };
                _overflowHashCode;
                _aggregator;
                constructor(e, t) {
                    ((this._aggregator = e), (this._cardinalityLimit = (t ?? 2e3) - 1), (this._overflowHashCode = w(this._overflowAttributes)));
                }
                record(e, t, r, i) {
                    let s = this._activeCollectionStorage.get(t);
                    if (!s) {
                        if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
                            let t = this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(i));
                            t?.record(e);
                            return;
                        }
                        ((s = this._aggregator.createAccumulation(i)), this._activeCollectionStorage.set(t, s));
                    }
                    s?.record(e);
                }
                batchCumulate(e, t) {
                    for (let [r, i, s] of e.entries()) {
                        let e = r,
                            a = s,
                            n = this._aggregator.createAccumulation(t);
                        n?.record(i);
                        let o = n;
                        if (this._cumulativeMemoStorage.has(e, a)) {
                            let t = this._cumulativeMemoStorage.get(e, a);
                            o = this._aggregator.diff(t, n);
                        } else if (
                            this._cumulativeMemoStorage.size >= this._cardinalityLimit &&
                            ((e = this._overflowAttributes), (a = this._overflowHashCode), this._cumulativeMemoStorage.has(e, a))
                        ) {
                            let t = this._cumulativeMemoStorage.get(e, a);
                            o = this._aggregator.diff(t, n);
                        }
                        if (this._activeCollectionStorage.has(e, a)) {
                            let t = this._activeCollectionStorage.get(e, a);
                            o = this._aggregator.merge(t, o);
                        }
                        (this._cumulativeMemoStorage.set(e, n, a), this._activeCollectionStorage.set(e, o, a));
                    }
                }
                collect() {
                    let e = this._activeCollectionStorage;
                    return ((this._activeCollectionStorage = new ex()), e);
                }
            }
            class ey {
                _aggregator;
                _unreportedAccumulations = new Map();
                _reportHistory = new Map();
                constructor(e, t) {
                    ((this._aggregator = e),
                        t.forEach((e) => {
                            this._unreportedAccumulations.set(e, []);
                        }));
                }
                buildMetrics(e, t, r, s) {
                    let a;
                    this._stashAccumulations(r);
                    let n = this._getMergedUnreportedAccumulations(e),
                        o = n;
                    if (this._reportHistory.has(e)) {
                        let t = this._reportHistory.get(e),
                            r = t.collectionTime;
                        o =
                            (a = t.aggregationTemporality) === i.CUMULATIVE
                                ? ey.merge(t.accumulations, n, this._aggregator)
                                : ey.calibrateStartTime(t.accumulations, n, r);
                    } else a = e.selectAggregationTemporality(t.type);
                    this._reportHistory.set(e, { accumulations: o, collectionTime: s, aggregationTemporality: a });
                    let c = Array.from(o.entries());
                    if (0 !== c.length) return this._aggregator.toMetricData(t, a, c, s);
                }
                _stashAccumulations(e) {
                    for (let t of this._unreportedAccumulations.keys()) {
                        let r = this._unreportedAccumulations.get(t);
                        (void 0 === r && ((r = []), this._unreportedAccumulations.set(t, r)), r.push(e));
                    }
                }
                _getMergedUnreportedAccumulations(e) {
                    let t = new ex(),
                        r = this._unreportedAccumulations.get(e);
                    if ((this._unreportedAccumulations.set(e, []), void 0 === r)) return t;
                    for (let e of r) t = ey.merge(t, e, this._aggregator);
                    return t;
                }
                static merge(e, t, r) {
                    let i = t.entries(),
                        s = i.next();
                    for (; !0 !== s.done;) {
                        let [t, a, n] = s.value;
                        if (e.has(t, n)) {
                            let i = e.get(t, n),
                                s = r.merge(i, a);
                            e.set(t, s, n);
                        } else e.set(t, a, n);
                        s = i.next();
                    }
                    return e;
                }
                static calibrateStartTime(e, t, r) {
                    for (let [i, s] of e.keys()) {
                        let e = t.get(i, s);
                        e?.setStartTime(r);
                    }
                    return t;
                }
            }
            class eO extends eE {
                _aggregationCardinalityLimit;
                _deltaMetricStorage;
                _temporalMetricStorage;
                _attributesProcessor;
                constructor(e, t, r, i, s) {
                    (super(e),
                        (this._aggregationCardinalityLimit = s),
                        (this._deltaMetricStorage = new eA(t, this._aggregationCardinalityLimit)),
                        (this._temporalMetricStorage = new ey(t, i)),
                        (this._attributesProcessor = r));
                }
                record(e, t) {
                    let r = new ex();
                    for (let [t, i] of e.entries()) r.set(this._attributesProcessor.process(t), i);
                    this._deltaMetricStorage.batchCumulate(r, t);
                }
                collect(e, t) {
                    let r = this._deltaMetricStorage.collect();
                    return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, r, t);
                }
            }
            function eC(e, t) {
                let r = '';
                return (
                    e.unit !== t.unit &&
                        (r += `	- Unit '${e.unit}' does not match '${t.unit}'
`),
                    e.type !== t.type &&
                        (r += `	- Type '${e.type}' does not match '${t.type}'
`),
                    e.valueType !== t.valueType &&
                        (r += `	- Value Type '${e.valueType}' does not match '${t.valueType}'
`),
                    e.description !== t.description &&
                        (r += `	- Description '${e.description}' does not match '${t.description}'
`),
                    r
                );
            }
            function eU(e, t) {
                if (e.valueType !== t.valueType) return `	- use valueType '${e.valueType}' on instrument creation or use an instrument name other than '${t.name}'`;
                if (e.unit !== t.unit) return `	- use unit '${e.unit}' on instrument creation or use an instrument name other than '${t.name}'`;
                if (e.type !== t.type) {
                    let r = JSON.stringify({ name: t.name, type: t.type, unit: t.unit });
                    return `	- create a new view with a name other than '${e.name}' and InstrumentSelector '${r}'`;
                }
                if (e.description !== t.description) {
                    let r = JSON.stringify({ name: t.name, type: t.type, unit: t.unit });
                    return `	- create a new view with a name other than '${e.name}' and InstrumentSelector '${r}'
    	- OR - create a new view with the name ${e.name} and description '${e.description}' and InstrumentSelector ${r}
    	- OR - create a new view with the name ${t.name} and description '${e.description}' and InstrumentSelector ${r}`;
                }
                return '';
            }
            class eN {
                _sharedRegistry = new Map();
                _perCollectorRegistry = new Map();
                static create() {
                    return new eN();
                }
                getStorages(e) {
                    let t = [];
                    for (let e of this._sharedRegistry.values()) t = t.concat(e);
                    let r = this._perCollectorRegistry.get(e);
                    if (null != r) for (let e of r.values()) t = t.concat(e);
                    return t;
                }
                register(e) {
                    this._registerStorage(e, this._sharedRegistry);
                }
                registerForCollector(e, t) {
                    let r = this._perCollectorRegistry.get(e);
                    (null == r && ((r = new Map()), this._perCollectorRegistry.set(e, r)), this._registerStorage(t, r));
                }
                findOrUpdateCompatibleStorage(e) {
                    let t = this._sharedRegistry.get(e.name);
                    return void 0 === t ? null : this._findOrUpdateCompatibleStorage(e, t);
                }
                findOrUpdateCompatibleCollectorStorage(e, t) {
                    let r = this._perCollectorRegistry.get(e);
                    if (void 0 === r) return null;
                    let i = r.get(t.name);
                    return void 0 === i ? null : this._findOrUpdateCompatibleStorage(t, i);
                }
                _registerStorage(e, t) {
                    let r = e.getInstrumentDescriptor(),
                        i = t.get(r.name);
                    if (void 0 === i) return void t.set(r.name, [e]);
                    i.push(e);
                }
                _findOrUpdateCompatibleStorage(e, t) {
                    let r = null;
                    for (let i of t) {
                        let t = i.getInstrumentDescriptor();
                        !(function (e, t) {
                            var r, i;
                            return (
                                (r = e.name), (i = t.name), r.toLowerCase() === i.toLowerCase() && e.unit === t.unit && e.type === t.type && e.valueType === t.valueType
                            );
                        })(t, e)
                            ? m.s.warn(
                                  'A view or instrument with the name ',
                                  e.name,
                                  ' has already been registered and is incompatible with another registered view.\n',
                                  'Details:\n',
                                  eC(t, e),
                                  'To resolve the conflict:\n',
                                  eU(t, e),
                              )
                            : (t.description !== e.description &&
                                  (e.description.length > t.description.length && i.updateDescription(e.description),
                                  m.s.warn(
                                      'A view or instrument with the name ',
                                      e.name,
                                      ' has already been registered, but has a different description and is incompatible with another registered view.\n',
                                      'Details:\n',
                                      eC(t, e),
                                      'The longer description will be used.\nTo resolve the conflict:',
                                      eU(t, e),
                                  )),
                              (r = i));
                    }
                    return r;
                }
            }
            class eR {
                _backingStorages;
                constructor(e) {
                    this._backingStorages = e;
                }
                record(e, t, r, i) {
                    let s = this._backingStorages;
                    for (let a = 0; a < s.length; a++) s[a].record(e, t, r, i);
                }
            }
            class eI {
                _buffer = new ex();
                _instrumentName;
                _valueType;
                constructor(e, t) {
                    ((this._instrumentName = e), (this._valueType = t));
                }
                observe(e, t = {}) {
                    if ('number' != typeof e) return void m.s.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);
                    (this._valueType !== c.INT ||
                        Number.isInteger(e) ||
                        (m.s.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`),
                        Number.isInteger((e = Math.trunc(e))))) &&
                        this._buffer.set(t, e);
                }
            }
            class eL {
                _buffer = new Map();
                observe(e, t, r = {}) {
                    if (!eM(e)) return;
                    let i = this._buffer.get(e);
                    if ((null == i && ((i = new ex()), this._buffer.set(e, i)), 'number' != typeof t))
                        return void m.s.warn(`non-number value provided to metric ${e._descriptor.name}: ${t}`);
                    (e._descriptor.valueType !== c.INT ||
                        Number.isInteger(t) ||
                        (m.s.warn(`INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`),
                        Number.isInteger((t = Math.trunc(t))))) &&
                        i.set(r, t);
                }
            }
            class eP {
                _callbacks = [];
                _batchCallbacks = [];
                addCallback(e, t) {
                    this._findCallback(e, t) >= 0 || this._callbacks.push({ callback: e, instrument: t });
                }
                removeCallback(e, t) {
                    let r = this._findCallback(e, t);
                    r < 0 || this._callbacks.splice(r, 1);
                }
                addBatchCallback(e, t) {
                    let r = new Set(t.filter(eM));
                    if (0 === r.size) return void m.s.error('BatchObservableCallback is not associated with valid instruments', t);
                    this._findBatchCallback(e, r) >= 0 || this._batchCallbacks.push({ callback: e, instruments: r });
                }
                removeBatchCallback(e, t) {
                    let r = new Set(t.filter(eM)),
                        i = this._findBatchCallback(e, r);
                    i < 0 || this._batchCallbacks.splice(i, 1);
                }
                async observe(e, t) {
                    let r = this._observeCallbacks(e, t),
                        i = this._observeBatchCallbacks(e, t);
                    return (await Promise.allSettled([...r, ...i])).filter((e) => 'rejected' === e.status).map((e) => e.reason);
                }
                _observeCallbacks(e, t) {
                    return this._callbacks.map(async ({ callback: r, instrument: i }) => {
                        let s = new eI(i._descriptor.name, i._descriptor.valueType),
                            a = Promise.resolve(r(s));
                        (null != t && (a = M(a, t)),
                            await a,
                            i._metricStorages.forEach((t) => {
                                t.record(s._buffer, e);
                            }));
                    });
                }
                _observeBatchCallbacks(e, t) {
                    return this._batchCallbacks.map(async ({ callback: r, instruments: i }) => {
                        let s = new eL(),
                            a = Promise.resolve(r(s));
                        (null != t && (a = M(a, t)),
                            await a,
                            i.forEach((t) => {
                                let r = s._buffer.get(t);
                                null != r &&
                                    t._metricStorages.forEach((t) => {
                                        t.record(r, e);
                                    });
                            }));
                    });
                }
                _findCallback(e, t) {
                    return this._callbacks.findIndex((r) => r.callback === e && r.instrument === t);
                }
                _findBatchCallback(e, t) {
                    return this._batchCallbacks.findIndex(
                        (r) =>
                            r.callback === e &&
                            (function (e, t) {
                                if (e.size !== t.size) return !1;
                                for (let r of e) if (!t.has(r)) return !1;
                                return !0;
                            })(r.instruments, t),
                    );
                }
            }
            class ek extends eE {
                _aggregationCardinalityLimit;
                _deltaMetricStorage;
                _temporalMetricStorage;
                _attributesProcessor;
                constructor(e, t, r, i, s) {
                    (super(e),
                        (this._aggregationCardinalityLimit = s),
                        (this._deltaMetricStorage = new eA(t, this._aggregationCardinalityLimit)),
                        (this._temporalMetricStorage = new ey(t, i)),
                        (this._attributesProcessor = r));
                }
                record(e, t, r, i) {
                    ((t = this._attributesProcessor.process(t, r)), this._deltaMetricStorage.record(e, t, r, i));
                }
                collect(e, t) {
                    let r = this._deltaMetricStorage.collect();
                    return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, r, t);
                }
            }
            class eB {
                process(e, t) {
                    return e;
                }
            }
            class eG {
                _processors;
                constructor(e) {
                    this._processors = e;
                }
                process(e, t) {
                    let r = e;
                    for (let e of this._processors) r = e.process(r, t);
                    return r;
                }
            }
            let eD = new eB();
            class eV {
                metricStorageRegistry = new eN();
                observableRegistry = new eP();
                meter;
                _meterProviderSharedState;
                _instrumentationScope;
                constructor(e, t) {
                    ((this.meter = new ev(this)), (this._meterProviderSharedState = e), (this._instrumentationScope = t));
                }
                registerMetricStorage(e) {
                    let t = this._registerMetricStorage(e, ek);
                    return 1 === t.length ? t[0] : new eR(t);
                }
                registerAsyncMetricStorage(e) {
                    return this._registerMetricStorage(e, eO);
                }
                async collect(e, t, r) {
                    let i = await this.observableRegistry.observe(t, r?.timeoutMillis),
                        s = this.metricStorageRegistry.getStorages(e);
                    if (0 === s.length) return null;
                    let a = [];
                    return (s.forEach((r) => {
                        let i = r.collect(e, t);
                        null != i && a.push(i);
                    }),
                    0 === a.length)
                        ? { errors: i }
                        : { scopeMetrics: { scope: this._instrumentationScope, metrics: a }, errors: i };
                }
                _registerMetricStorage(e, t) {
                    let r = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map((r) => {
                        let i = {
                                name: r.name ?? e.name,
                                description: r.description ?? e.description,
                                type: e.type,
                                unit: e.unit,
                                valueType: e.valueType,
                                advice: e.advice,
                            },
                            s = this.metricStorageRegistry.findOrUpdateCompatibleStorage(i);
                        if (null != s) return s;
                        let a = r.aggregation.createAggregator(i),
                            n = new t(i, a, r.attributesProcessor, this._meterProviderSharedState.metricCollectors, r.aggregationCardinalityLimit);
                        return (this.metricStorageRegistry.register(n), n);
                    });
                    if (0 === r.length) {
                        let i = this._meterProviderSharedState.selectAggregations(e.type).map(([r, i]) => {
                            let s = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(r, e);
                            if (null != s) return s;
                            let a = i.createAggregator(e),
                                n = r.selectCardinalityLimit(e.type),
                                o = new t(e, a, eD, [r], n);
                            return (this.metricStorageRegistry.registerForCollector(r, o), o);
                        });
                        r = r.concat(i);
                    }
                    return r;
                }
            }
            class eF {
                viewRegistry = new ec();
                metricCollectors = [];
                meterSharedStates = new Map();
                resource;
                constructor(e) {
                    this.resource = e;
                }
                getMeterSharedState(e) {
                    let t = `${e.name}:${e.version ?? ''}:${e.schemaUrl ?? ''}`,
                        r = this.meterSharedStates.get(t);
                    return (null == r && ((r = new eV(this, e)), this.meterSharedStates.set(t, r)), r);
                }
                selectAggregations(e) {
                    let t = [];
                    for (let r of this.metricCollectors) t.push([r, j(r.selectAggregation(e))]);
                    return t;
                }
            }
            class e$ {
                _sharedState;
                _metricReader;
                constructor(e, t) {
                    ((this._sharedState = e), (this._metricReader = t));
                }
                async collect(e) {
                    let t = (0, p.lg)(Date.now()),
                        r = [],
                        i = [],
                        s = Array.from(this._sharedState.meterSharedStates.values()).map(async (s) => {
                            let a = await s.collect(this, t, e);
                            (a?.scopeMetrics != null && r.push(a.scopeMetrics), a?.errors != null && i.push(...a.errors));
                        });
                    return (await Promise.all(s), { resourceMetrics: { resource: this._sharedState.resource, scopeMetrics: r }, errors: i });
                }
                async forceFlush(e) {
                    await this._metricReader.forceFlush(e);
                }
                async shutdown(e) {
                    await this._metricReader.shutdown(e);
                }
                selectAggregationTemporality(e) {
                    return this._metricReader.selectAggregationTemporality(e);
                }
                selectAggregation(e) {
                    return this._metricReader.selectAggregation(e);
                }
                selectCardinalityLimit(e) {
                    return this._metricReader.selectCardinalityLimit?.(e) ?? 2e3;
                }
            }
            let ez = /[\^$\\.+?()[\]{}|]/g;
            class eH {
                _matchAll;
                _regexp;
                constructor(e) {
                    '*' === e ? ((this._matchAll = !0), (this._regexp = /.*/)) : ((this._matchAll = !1), (this._regexp = new RegExp(eH.escapePattern(e))));
                }
                match(e) {
                    return !!this._matchAll || this._regexp.test(e);
                }
                static escapePattern(e) {
                    return `^${e.replace(ez, '\\$&').replace('*', '.*')}$`;
                }
                static hasWildcard(e) {
                    return e.includes('*');
                }
            }
            class eW {
                _matchAll;
                _pattern;
                constructor(e) {
                    ((this._matchAll = void 0 === e), (this._pattern = e));
                }
                match(e) {
                    return !!this._matchAll || e === this._pattern;
                }
            }
            class eX {
                _nameFilter;
                _type;
                _unitFilter;
                constructor(e) {
                    ((this._nameFilter = new eH(e?.name ?? '*')), (this._type = e?.type), (this._unitFilter = new eW(e?.unit)));
                }
                getType() {
                    return this._type;
                }
                getNameFilter() {
                    return this._nameFilter;
                }
                getUnitFilter() {
                    return this._unitFilter;
                }
            }
            class eY {
                _nameFilter;
                _versionFilter;
                _schemaUrlFilter;
                constructor(e) {
                    ((this._nameFilter = new eW(e?.name)), (this._versionFilter = new eW(e?.version)), (this._schemaUrlFilter = new eW(e?.schemaUrl)));
                }
                getNameFilter() {
                    return this._nameFilter;
                }
                getVersionFilter() {
                    return this._versionFilter;
                }
                getSchemaUrlFilter() {
                    return this._schemaUrlFilter;
                }
            }
            class eJ {
                name;
                description;
                aggregation;
                attributesProcessor;
                instrumentSelector;
                meterSelector;
                aggregationCardinalityLimit;
                constructor(e) {
                    ((!(function (e) {
                        if (
                            null == e.instrumentName &&
                            null == e.instrumentType &&
                            null == e.instrumentUnit &&
                            null == e.meterName &&
                            null == e.meterVersion &&
                            null == e.meterSchemaUrl
                        )
                            throw Error('Cannot create view with no selector arguments supplied');
                        if (null != e.name && (e?.instrumentName == null || eH.hasWildcard(e.instrumentName)))
                            throw Error('Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.');
                    })(e),
                    null != e.attributesProcessors)
                        ? (this.attributesProcessor = new eG(e.attributesProcessors))
                        : (this.attributesProcessor = eD),
                        (this.name = e.name),
                        (this.description = e.description),
                        (this.aggregation = j(e.aggregation ?? { type: o.DEFAULT })),
                        (this.instrumentSelector = new eX({ name: e.instrumentName, type: e.instrumentType, unit: e.instrumentUnit })),
                        (this.meterSelector = new eY({ name: e.meterName, version: e.meterVersion, schemaUrl: e.meterSchemaUrl })),
                        (this.aggregationCardinalityLimit = e.aggregationCardinalityLimit));
                }
            }
            class ej {
                _sharedState;
                _shutdown = !1;
                constructor(e) {
                    if (((this._sharedState = new eF(e?.resource ?? (0, eo.gk)())), e?.views != null && e.views.length > 0))
                        for (let t of e.views) this._sharedState.viewRegistry.addView(new eJ(t));
                    if (e?.readers != null && e.readers.length > 0)
                        for (let t of e.readers) {
                            let e = new e$(this._sharedState, t);
                            (t.setMetricProducer(e), this._sharedState.metricCollectors.push(e));
                        }
                }
                getMeter(e, t = '', r = {}) {
                    return this._shutdown
                        ? (m.s.warn('A shutdown MeterProvider cannot provide a Meter'), (0, en.Ac)())
                        : this._sharedState.getMeterSharedState({ name: e, version: t, schemaUrl: r.schemaUrl }).meter;
                }
                async shutdown(e) {
                    if (this._shutdown) return void m.s.warn('shutdown may only be called once per MeterProvider');
                    ((this._shutdown = !0), await Promise.all(this._sharedState.metricCollectors.map((t) => t.shutdown(e))));
                }
                async forceFlush(e) {
                    if (this._shutdown) return void m.s.warn('invalid attempt to force flush after MeterProvider shutdown');
                    await Promise.all(this._sharedState.metricCollectors.map((t) => t.forceFlush(e)));
                }
            }
            var eq = r(39232);
            !(function (e) {
                ((e[(e.DELTA = 0)] = 'DELTA'), (e[(e.CUMULATIVE = 1)] = 'CUMULATIVE'), (e[(e.LOWMEMORY = 2)] = 'LOWMEMORY'));
            })(l || (l = {}));
            var eZ = r(77680);
            let eK = () => i.CUMULATIVE,
                eQ = (e) => {
                    switch (e) {
                        case a.COUNTER:
                        case a.OBSERVABLE_COUNTER:
                        case a.GAUGE:
                        case a.HISTOGRAM:
                        case a.OBSERVABLE_GAUGE:
                            return i.DELTA;
                        case a.UP_DOWN_COUNTER:
                        case a.OBSERVABLE_UP_DOWN_COUNTER:
                            return i.CUMULATIVE;
                    }
                },
                e0 = (e) => {
                    switch (e) {
                        case a.COUNTER:
                        case a.HISTOGRAM:
                            return i.DELTA;
                        case a.GAUGE:
                        case a.UP_DOWN_COUNTER:
                        case a.OBSERVABLE_UP_DOWN_COUNTER:
                        case a.OBSERVABLE_COUNTER:
                        case a.OBSERVABLE_GAUGE:
                            return i.CUMULATIVE;
                    }
                },
                e1 = Object.freeze({ type: o.DEFAULT });
            class e2 extends eZ.S {
                _aggregationTemporalitySelector;
                _aggregationSelector;
                constructor(e, t) {
                    (super(e),
                        (this._aggregationSelector = t?.aggregationPreference ?? (() => e1)),
                        (this._aggregationTemporalitySelector = (function (e) {
                            if (null != e) return e === l.DELTA ? eQ : e === l.LOWMEMORY ? e0 : eK;
                            let t = ((0, eq.HF)('OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE') ?? 'cumulative').toLowerCase();
                            return 'cumulative' === t
                                ? eK
                                : 'delta' === t
                                  ? eQ
                                  : 'lowmemory' === t
                                    ? e0
                                    : (m.s.warn(
                                          `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${t}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`,
                                      ),
                                      eK);
                        })(t?.temporalityPreference)));
                }
                selectAggregation(e) {
                    return this._aggregationSelector(e);
                }
                selectAggregationTemporality(e) {
                    return this._aggregationTemporalitySelector(e);
                }
            }
            !(function (e) {
                ((e[(e.AGGREGATION_TEMPORALITY_UNSPECIFIED = 0)] = 'AGGREGATION_TEMPORALITY_UNSPECIFIED'),
                    (e[(e.AGGREGATION_TEMPORALITY_DELTA = 1)] = 'AGGREGATION_TEMPORALITY_DELTA'),
                    (e[(e.AGGREGATION_TEMPORALITY_CUMULATIVE = 2)] = 'AGGREGATION_TEMPORALITY_CUMULATIVE'));
            })(u || (u = {}));
            var e3 = r(5026);
            function e5(e, t) {
                return e.dataPoints.map((r) =>
                    (function (e, t, r) {
                        let i = { attributes: (0, e3.Zs)(e.attributes, r), startTimeUnixNano: r.encodeHrTime(e.startTime), timeUnixNano: r.encodeHrTime(e.endTime) };
                        switch (t) {
                            case c.INT:
                                i.asInt = e.value;
                                break;
                            case c.DOUBLE:
                                i.asDouble = e.value;
                        }
                        return i;
                    })(r, e.descriptor.valueType, t),
                );
            }
            var e7 = r(25803);
            let e4 = {
                serializeRequest: (e) => {
                    var t, r;
                    let s =
                        ((t = [e]),
                        (r = e7.w9),
                        {
                            resourceMetrics: t.map((e) =>
                                (function (e, t) {
                                    var r, s;
                                    let a = (0, e3.Zg)(e.resource, t);
                                    return {
                                        resource: a,
                                        schemaUrl: a.schemaUrl,
                                        scopeMetrics:
                                            ((r = e.scopeMetrics),
                                            (s = t),
                                            Array.from(
                                                r.map((e) => ({
                                                    scope: (0, e3.d1)(e.scope),
                                                    metrics: e.metrics.map((e) =>
                                                        (function (e, t) {
                                                            var r, s, a, o;
                                                            let c = { name: e.descriptor.name, description: e.descriptor.description, unit: e.descriptor.unit },
                                                                l = (function (e) {
                                                                    switch (e) {
                                                                        case i.DELTA:
                                                                            return u.AGGREGATION_TEMPORALITY_DELTA;
                                                                        case i.CUMULATIVE:
                                                                            return u.AGGREGATION_TEMPORALITY_CUMULATIVE;
                                                                    }
                                                                })(e.aggregationTemporality);
                                                            switch (e.dataPointType) {
                                                                case n.SUM:
                                                                    c.sum = { aggregationTemporality: l, isMonotonic: e.isMonotonic, dataPoints: e5(e, t) };
                                                                    break;
                                                                case n.GAUGE:
                                                                    c.gauge = { dataPoints: e5(e, t) };
                                                                    break;
                                                                case n.HISTOGRAM:
                                                                    c.histogram = {
                                                                        aggregationTemporality: l,
                                                                        dataPoints:
                                                                            ((r = e),
                                                                            (s = t),
                                                                            r.dataPoints.map((e) => {
                                                                                let t = e.value;
                                                                                return {
                                                                                    attributes: (0, e3.Zs)(e.attributes, s),
                                                                                    bucketCounts: t.buckets.counts,
                                                                                    explicitBounds: t.buckets.boundaries,
                                                                                    count: t.count,
                                                                                    sum: t.sum,
                                                                                    min: t.min,
                                                                                    max: t.max,
                                                                                    startTimeUnixNano: s.encodeHrTime(e.startTime),
                                                                                    timeUnixNano: s.encodeHrTime(e.endTime),
                                                                                };
                                                                            })),
                                                                    };
                                                                    break;
                                                                case n.EXPONENTIAL_HISTOGRAM:
                                                                    c.exponentialHistogram = {
                                                                        aggregationTemporality: l,
                                                                        dataPoints:
                                                                            ((a = e),
                                                                            (o = t),
                                                                            a.dataPoints.map((e) => {
                                                                                let t = e.value;
                                                                                return {
                                                                                    attributes: (0, e3.Zs)(e.attributes, o),
                                                                                    count: t.count,
                                                                                    min: t.min,
                                                                                    max: t.max,
                                                                                    sum: t.sum,
                                                                                    positive: { offset: t.positive.offset, bucketCounts: t.positive.bucketCounts },
                                                                                    negative: { offset: t.negative.offset, bucketCounts: t.negative.bucketCounts },
                                                                                    scale: t.scale,
                                                                                    zeroCount: t.zeroCount,
                                                                                    startTimeUnixNano: o.encodeHrTime(e.startTime),
                                                                                    timeUnixNano: o.encodeHrTime(e.endTime),
                                                                                };
                                                                            })),
                                                                    };
                                                            }
                                                            return c;
                                                        })(e, s),
                                                    ),
                                                    schemaUrl: e.scope.schemaUrl,
                                                })),
                                            )),
                                    };
                                })(e, r),
                            ),
                        });
                    return new TextEncoder().encode(JSON.stringify(s));
                },
                deserializeResponse: (e) => {
                    if (0 === e.length) return {};
                    let t = new TextDecoder();
                    try {
                        return JSON.parse(t.decode(e));
                    } catch (e) {
                        return (m.s.warn(`Failed to parse metrics export response: ${e.message}. Returning empty response`), {});
                    }
                },
            };
            var e6 = r(79651);
            class e8 extends e2 {
                constructor(e) {
                    super((0, e6.M)(e ?? {}, e4, 'v1/metrics', { 'Content-Type': 'application/json' }), e);
                }
            }
            var e9 = (e) =>
                'type' in e && 'otlp' === e.type
                    ? new ei({ exporter: new e8({ url: e.url, headers: (0, es.t)(e.auth) }) })
                    : ((e) =>
                          'metricReader' in e
                              ? e.metricReader
                              : 'metricExporter' in e
                                ? new ei({ exporter: e.metricExporter })
                                : 'console' === e.type
                                  ? new ei({ exporter: new K(), exportIntervalMillis: e.printPeriodMs })
                                  : void 0)(e);
            function te(e, t) {
                let r = new ej({ resource: e, views: [], readers: Array.isArray(t) ? t.map((e) => e9(e)).filter(Boolean) : [e9(t)].filter(Boolean) });
                return (ea.q.setGlobalMeterProvider(r), r);
            }
        },
        39232: (e, t, r) => {
            function i(e) {}
            function s(e) {}
            r.d(t, { HF: () => i, Jk: () => s });
        },
    },
]);
