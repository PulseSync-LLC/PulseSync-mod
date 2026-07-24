'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1561],
    {
        10262: (t, i, h) => {
            h.d(i, { d: () => l });
            var s = h(28429);
            function r(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = i[3],
                    a = h[0],
                    o = h[1],
                    u = h[2],
                    l = h[3];
                return (
                    (t[0] = s * l + n * a + r * u - e * o),
                    (t[1] = r * l + n * o + e * a - s * u),
                    (t[2] = e * l + n * u + s * o - r * a),
                    (t[3] = n * l - s * a - r * o - e * u),
                    t
                );
            }
            let e = function (t, i) {
                let h = i[0],
                    s = i[1],
                    r = i[2],
                    e = i[3],
                    n = h * h + s * s + r * r + e * e;
                return n > 0 && (n = 1 / Math.sqrt(n)), (t[0] = h * n), (t[1] = s * n), (t[2] = r * n), (t[3] = e * n), t;
            };
            class n extends Array {
                constructor(t = 0, i = 0, h = 0, s = 1) {
                    super(t, i, h, s), (this.onChange = () => {}), (this._target = this);
                    let r = ['0', '1', '2', '3'];
                    return new Proxy(this, {
                        set(t, i) {
                            let h = Reflect.set(...arguments);
                            return h && r.includes(i) && t.onChange(), h;
                        },
                    });
                }
                get x() {
                    return this[0];
                }
                get y() {
                    return this[1];
                }
                get z() {
                    return this[2];
                }
                get w() {
                    return this[3];
                }
                set x(t) {
                    (this._target[0] = t), this.onChange();
                }
                set y(t) {
                    (this._target[1] = t), this.onChange();
                }
                set z(t) {
                    (this._target[2] = t), this.onChange();
                }
                set w(t) {
                    (this._target[3] = t), this.onChange();
                }
                identity() {
                    var t;
                    return ((t = this._target)[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), this.onChange(), this;
                }
                set(t, i, h, s) {
                    var r;
                    return t.length ? this.copy(t) : ((r = this._target), (r[0] = t), (r[1] = i), (r[2] = h), (r[3] = s), this.onChange(), this);
                }
                rotateX(t) {
                    var i, h, s;
                    let r, e, n, a, o, u;
                    return (
                        (i = this._target),
                        (h = this._target),
                        (s = 0.5 * t),
                        (r = h[0]),
                        (e = h[1]),
                        (n = h[2]),
                        (a = h[3]),
                        (o = Math.sin(s)),
                        (u = Math.cos(s)),
                        (i[0] = r * u + a * o),
                        (i[1] = e * u + n * o),
                        (i[2] = n * u - e * o),
                        (i[3] = a * u - r * o),
                        this.onChange(),
                        this
                    );
                }
                rotateY(t) {
                    var i, h, s;
                    let r, e, n, a, o, u;
                    return (
                        (i = this._target),
                        (h = this._target),
                        (s = 0.5 * t),
                        (r = h[0]),
                        (e = h[1]),
                        (n = h[2]),
                        (a = h[3]),
                        (o = Math.sin(s)),
                        (u = Math.cos(s)),
                        (i[0] = r * u - n * o),
                        (i[1] = e * u + a * o),
                        (i[2] = n * u + r * o),
                        (i[3] = a * u - e * o),
                        this.onChange(),
                        this
                    );
                }
                rotateZ(t) {
                    var i, h, s;
                    let r, e, n, a, o, u;
                    return (
                        (i = this._target),
                        (h = this._target),
                        (s = 0.5 * t),
                        (r = h[0]),
                        (e = h[1]),
                        (n = h[2]),
                        (a = h[3]),
                        (o = Math.sin(s)),
                        (u = Math.cos(s)),
                        (i[0] = r * u + e * o),
                        (i[1] = e * u - r * o),
                        (i[2] = n * u + a * o),
                        (i[3] = a * u - n * o),
                        this.onChange(),
                        this
                    );
                }
                inverse(t = this._target) {
                    var i;
                    let h, s, r, e, n, a;
                    return (
                        (i = this._target),
                        (h = t[0]),
                        (a = (n = h * h + (s = t[1]) * s + (r = t[2]) * r + (e = t[3]) * e) ? 1 / n : 0),
                        (i[0] = -h * a),
                        (i[1] = -s * a),
                        (i[2] = -r * a),
                        (i[3] = e * a),
                        this.onChange(),
                        this
                    );
                }
                conjugate(t = this._target) {
                    var i;
                    return (i = this._target), (i[0] = -t[0]), (i[1] = -t[1]), (i[2] = -t[2]), (i[3] = t[3]), this.onChange(), this;
                }
                copy(t) {
                    var i;
                    return (i = this._target), (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[3]), this.onChange(), this;
                }
                normalize(t = this._target) {
                    return e(this._target, t), this.onChange(), this;
                }
                multiply(t, i) {
                    return i ? r(this._target, t, i) : r(this._target, this._target, t), this.onChange(), this;
                }
                dot(t) {
                    var i;
                    return (i = this._target), i[0] * t[0] + i[1] * t[1] + i[2] * t[2] + i[3] * t[3];
                }
                fromMatrix3(t) {
                    return (
                        (function (t, i) {
                            let h,
                                s = i[0] + i[4] + i[8];
                            if (s > 0)
                                (h = Math.sqrt(s + 1)),
                                    (t[3] = 0.5 * h),
                                    (h = 0.5 / h),
                                    (t[0] = (i[5] - i[7]) * h),
                                    (t[1] = (i[6] - i[2]) * h),
                                    (t[2] = (i[1] - i[3]) * h);
                            else {
                                let s = 0;
                                i[4] > i[0] && (s = 1), i[8] > i[3 * s + s] && (s = 2);
                                let r = (s + 1) % 3,
                                    e = (s + 2) % 3;
                                (h = Math.sqrt(i[3 * s + s] - i[3 * r + r] - i[3 * e + e] + 1)),
                                    (t[s] = 0.5 * h),
                                    (h = 0.5 / h),
                                    (t[3] = (i[3 * r + e] - i[3 * e + r]) * h),
                                    (t[r] = (i[3 * r + s] + i[3 * s + r]) * h),
                                    (t[e] = (i[3 * e + s] + i[3 * s + e]) * h);
                            }
                        })(this._target, t),
                        this.onChange(),
                        this
                    );
                }
                fromEuler(t, i) {
                    return (
                        (function (t, i, h = 'YXZ') {
                            let s = Math.sin(0.5 * i[0]),
                                r = Math.cos(0.5 * i[0]),
                                e = Math.sin(0.5 * i[1]),
                                n = Math.cos(0.5 * i[1]),
                                a = Math.sin(0.5 * i[2]),
                                o = Math.cos(0.5 * i[2]);
                            'XYZ' === h
                                ? ((t[0] = s * n * o + r * e * a), (t[1] = r * e * o - s * n * a), (t[2] = r * n * a + s * e * o), (t[3] = r * n * o - s * e * a))
                                : 'YXZ' === h
                                  ? ((t[0] = s * n * o + r * e * a), (t[1] = r * e * o - s * n * a), (t[2] = r * n * a - s * e * o), (t[3] = r * n * o + s * e * a))
                                  : 'ZXY' === h
                                    ? ((t[0] = s * n * o - r * e * a), (t[1] = r * e * o + s * n * a), (t[2] = r * n * a + s * e * o), (t[3] = r * n * o - s * e * a))
                                    : 'ZYX' === h
                                      ? ((t[0] = s * n * o - r * e * a), (t[1] = r * e * o + s * n * a), (t[2] = r * n * a - s * e * o), (t[3] = r * n * o + s * e * a))
                                      : 'YZX' === h
                                        ? ((t[0] = s * n * o + r * e * a), (t[1] = r * e * o + s * n * a), (t[2] = r * n * a - s * e * o), (t[3] = r * n * o - s * e * a))
                                        : 'XZY' === h &&
                                          ((t[0] = s * n * o - r * e * a),
                                          (t[1] = r * e * o - s * n * a),
                                          (t[2] = r * n * a + s * e * o),
                                          (t[3] = r * n * o + s * e * a));
                        })(this._target, t, t.order),
                        i || this.onChange(),
                        this
                    );
                }
                fromAxisAngle(t, i) {
                    var h, s;
                    let r;
                    return (
                        (h = this._target),
                        (r = Math.sin((s = 0.5 * i))),
                        (h[0] = r * t[0]),
                        (h[1] = r * t[1]),
                        (h[2] = r * t[2]),
                        (h[3] = Math.cos(s)),
                        this.onChange(),
                        this
                    );
                }
                slerp(t, i) {
                    var h, s;
                    let r, e, n, a, o, u, l, g, c, M, d, f, p;
                    return (
                        (h = this._target),
                        (s = this._target),
                        (u = s[0]),
                        (l = s[1]),
                        (g = s[2]),
                        (c = s[3]),
                        (M = t[0]),
                        (e = u * M + l * (d = t[1]) + g * (f = t[2]) + c * (p = t[3])) < 0 && ((e = -e), (M = -M), (d = -d), (f = -f), (p = -p)),
                        1 - e > 1e-6 ? ((n = Math.sin((r = Math.acos(e)))), (a = Math.sin((1 - i) * r) / n), (o = Math.sin(i * r) / n)) : ((a = 1 - i), (o = i)),
                        (h[0] = a * u + o * M),
                        (h[1] = a * l + o * d),
                        (h[2] = a * g + o * f),
                        (h[3] = a * c + o * p),
                        this.onChange(),
                        this
                    );
                }
                fromArray(t, i = 0) {
                    return (this._target[0] = t[i]), (this._target[1] = t[i + 1]), (this._target[2] = t[i + 2]), (this._target[3] = t[i + 3]), this.onChange(), this;
                }
                toArray(t = [], i = 0) {
                    return (t[i] = this[0]), (t[i + 1] = this[1]), (t[i + 2] = this[2]), (t[i + 3] = this[3]), t;
                }
            }
            var a = h(81161);
            let o = new a.$();
            class u extends Array {
                constructor(t = 0, i = t, h = t, s = 'YXZ') {
                    super(t, i, h), (this.order = s), (this.onChange = () => {}), (this._target = this);
                    let r = ['0', '1', '2'];
                    return new Proxy(this, {
                        set(t, i) {
                            let h = Reflect.set(...arguments);
                            return h && r.includes(i) && t.onChange(), h;
                        },
                    });
                }
                get x() {
                    return this[0];
                }
                get y() {
                    return this[1];
                }
                get z() {
                    return this[2];
                }
                set x(t) {
                    (this._target[0] = t), this.onChange();
                }
                set y(t) {
                    (this._target[1] = t), this.onChange();
                }
                set z(t) {
                    (this._target[2] = t), this.onChange();
                }
                set(t, i = t, h = t) {
                    return t.length ? this.copy(t) : ((this._target[0] = t), (this._target[1] = i), (this._target[2] = h), this.onChange(), this);
                }
                copy(t) {
                    return (this._target[0] = t[0]), (this._target[1] = t[1]), (this._target[2] = t[2]), this.onChange(), this;
                }
                reorder(t) {
                    return (this._target.order = t), this.onChange(), this;
                }
                fromRotationMatrix(t, i = this.order) {
                    return (
                        (function (t, i, h = 'YXZ') {
                            'XYZ' === h
                                ? ((t[1] = Math.asin(Math.min(Math.max(i[8], -1), 1))),
                                  0.99999 > Math.abs(i[8])
                                      ? ((t[0] = Math.atan2(-i[9], i[10])), (t[2] = Math.atan2(-i[4], i[0])))
                                      : ((t[0] = Math.atan2(i[6], i[5])), (t[2] = 0)))
                                : 'YXZ' === h
                                  ? ((t[0] = Math.asin(-Math.min(Math.max(i[9], -1), 1))),
                                    0.99999 > Math.abs(i[9])
                                        ? ((t[1] = Math.atan2(i[8], i[10])), (t[2] = Math.atan2(i[1], i[5])))
                                        : ((t[1] = Math.atan2(-i[2], i[0])), (t[2] = 0)))
                                  : 'ZXY' === h
                                    ? ((t[0] = Math.asin(Math.min(Math.max(i[6], -1), 1))),
                                      0.99999 > Math.abs(i[6])
                                          ? ((t[1] = Math.atan2(-i[2], i[10])), (t[2] = Math.atan2(-i[4], i[5])))
                                          : ((t[1] = 0), (t[2] = Math.atan2(i[1], i[0]))))
                                    : 'ZYX' === h
                                      ? ((t[1] = Math.asin(-Math.min(Math.max(i[2], -1), 1))),
                                        0.99999 > Math.abs(i[2])
                                            ? ((t[0] = Math.atan2(i[6], i[10])), (t[2] = Math.atan2(i[1], i[0])))
                                            : ((t[0] = 0), (t[2] = Math.atan2(-i[4], i[5]))))
                                      : 'YZX' === h
                                        ? ((t[2] = Math.asin(Math.min(Math.max(i[1], -1), 1))),
                                          0.99999 > Math.abs(i[1])
                                              ? ((t[0] = Math.atan2(-i[9], i[5])), (t[1] = Math.atan2(-i[2], i[0])))
                                              : ((t[0] = 0), (t[1] = Math.atan2(i[8], i[10]))))
                                        : 'XZY' === h &&
                                          ((t[2] = Math.asin(-Math.min(Math.max(i[4], -1), 1))),
                                          0.99999 > Math.abs(i[4])
                                              ? ((t[0] = Math.atan2(i[6], i[5])), (t[1] = Math.atan2(i[8], i[0])))
                                              : ((t[0] = Math.atan2(-i[9], i[10])), (t[1] = 0)));
                        })(this._target, t, i),
                        this.onChange(),
                        this
                    );
                }
                fromQuaternion(t, i = this.order, h) {
                    return o.fromQuaternion(t), this._target.fromRotationMatrix(o, i), h || this.onChange(), this;
                }
                fromArray(t, i = 0) {
                    return (this._target[0] = t[i]), (this._target[1] = t[i + 1]), (this._target[2] = t[i + 2]), this;
                }
                toArray(t = [], i = 0) {
                    return (t[i] = this[0]), (t[i + 1] = this[1]), (t[i + 2] = this[2]), t;
                }
            }
            class l {
                constructor() {
                    (this.parent = null),
                        (this.children = []),
                        (this.visible = !0),
                        (this.matrix = new a.$()),
                        (this.worldMatrix = new a.$()),
                        (this.matrixAutoUpdate = !0),
                        (this.worldMatrixNeedsUpdate = !1),
                        (this.position = new s.e()),
                        (this.quaternion = new n()),
                        (this.scale = new s.e(1)),
                        (this.rotation = new u()),
                        (this.up = new s.e(0, 1, 0)),
                        (this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0)),
                        (this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0));
                }
                setParent(t, i = !0) {
                    this.parent && t !== this.parent && this.parent.removeChild(this, !1), (this.parent = t), i && t && t.addChild(this, !1);
                }
                addChild(t, i = !0) {
                    ~this.children.indexOf(t) || this.children.push(t), i && t.setParent(this, !1);
                }
                removeChild(t, i = !0) {
                    ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), i && t.setParent(null, !1);
                }
                updateMatrixWorld(t) {
                    this.matrixAutoUpdate && this.updateMatrix(),
                        (this.worldMatrixNeedsUpdate || t) &&
                            (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                            (this.worldMatrixNeedsUpdate = !1),
                            (t = !0));
                    for (let i = 0, h = this.children.length; i < h; i++) this.children[i].updateMatrixWorld(t);
                }
                updateMatrix() {
                    this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0);
                }
                traverse(t) {
                    if (!t(this)) for (let i = 0, h = this.children.length; i < h; i++) this.children[i].traverse(t);
                }
                decompose() {
                    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
                }
                lookAt(t, i = !1) {
                    i ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
                        this.matrix.getRotation(this.quaternion._target),
                        this.rotation.fromQuaternion(this.quaternion);
                }
            }
        },
        20686: (t, i, h) => {
            new (h(28429).e)();
        },
        21722: (t, i, h) => {
            var s = h(10262);
            h(81161);
            s.d;
        },
        23845: (t, i, h) => {
            new (h(28429).e)();
        },
        26313: () => {},
        28429: (t, i, h) => {
            h.d(i, { e: () => r });
            var s = h(70413);
            class r extends Array {
                constructor(t = 0, i = t, h = t) {
                    return super(t, i, h), this;
                }
                get x() {
                    return this[0];
                }
                get y() {
                    return this[1];
                }
                get z() {
                    return this[2];
                }
                set x(t) {
                    this[0] = t;
                }
                set y(t) {
                    this[1] = t;
                }
                set z(t) {
                    this[2] = t;
                }
                set(t, i = t, h = t) {
                    return t.length ? this.copy(t) : ((0, s.hZ)(this, t, i, h), this);
                }
                copy(t) {
                    return (0, s.C)(this, t), this;
                }
                add(t, i) {
                    return i ? (0, s.WQ)(this, t, i) : (0, s.WQ)(this, this, t), this;
                }
                sub(t, i) {
                    return i ? (0, s.Re)(this, t, i) : (0, s.Re)(this, this, t), this;
                }
                multiply(t) {
                    return t.length ? (0, s.lw)(this, this, t) : (0, s.hs)(this, this, t), this;
                }
                divide(t) {
                    return t.length ? (0, s.Qr)(this, this, t) : (0, s.hs)(this, this, 1 / t), this;
                }
                inverse(t = this) {
                    return (0, s.DI)(this, t), this;
                }
                len() {
                    return (0, s.Bw)(this);
                }
                distance(t) {
                    return t ? (0, s.Io)(this, t) : (0, s.Bw)(this);
                }
                squaredLen() {
                    return (0, s.m3)(this);
                }
                squaredDistance(t) {
                    return t ? (0, s.hG)(this, t) : (0, s.m3)(this);
                }
                negate(t = this) {
                    return (0, s.ze)(this, t), this;
                }
                cross(t, i) {
                    return i ? (0, s.$A)(this, t, i) : (0, s.$A)(this, this, t), this;
                }
                scale(t) {
                    return (0, s.hs)(this, this, t), this;
                }
                normalize() {
                    return (0, s.S8)(this, this), this;
                }
                dot(t) {
                    return (0, s.Om)(this, t);
                }
                equals(t) {
                    return (0, s.t2)(this, t);
                }
                applyMatrix3(t) {
                    return (0, s.ei)(this, this, t), this;
                }
                applyMatrix4(t) {
                    return (0, s.Z0)(this, this, t), this;
                }
                scaleRotateMatrix4(t) {
                    return (0, s.Sc)(this, this, t), this;
                }
                applyQuaternion(t) {
                    return (0, s.gL)(this, this, t), this;
                }
                angle(t) {
                    return (0, s.g7)(this, t);
                }
                lerp(t, i) {
                    return (0, s.Cc)(this, this, t, i), this;
                }
                smoothLerp(t, i, h) {
                    return (0, s.YO)(this, this, t, i, h), this;
                }
                clone() {
                    return new r(this[0], this[1], this[2]);
                }
                fromArray(t, i = 0) {
                    return (this[0] = t[i]), (this[1] = t[i + 1]), (this[2] = t[i + 2]), this;
                }
                toArray(t = [], i = 0) {
                    return (t[i] = this[0]), (t[i + 1] = this[1]), (t[i + 2] = this[2]), t;
                }
                transformDirection(t) {
                    let i = this[0],
                        h = this[1],
                        s = this[2];
                    return (
                        (this[0] = t[0] * i + t[4] * h + t[8] * s),
                        (this[1] = t[1] * i + t[5] * h + t[9] * s),
                        (this[2] = t[2] * i + t[6] * h + t[10] * s),
                        this.normalize()
                    );
                }
            }
        },
        46811: (t, i, h) => {},
        70413: (t, i, h) => {
            function s(t) {
                let i = t[0],
                    h = t[1],
                    s = t[2];
                return Math.sqrt(i * i + h * h + s * s);
            }
            function r(t, i) {
                return (t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), t;
            }
            function e(t, i, h, s) {
                return (t[0] = i), (t[1] = h), (t[2] = s), t;
            }
            function n(t, i, h) {
                return (t[0] = i[0] + h[0]), (t[1] = i[1] + h[1]), (t[2] = i[2] + h[2]), t;
            }
            function a(t, i, h) {
                return (t[0] = i[0] - h[0]), (t[1] = i[1] - h[1]), (t[2] = i[2] - h[2]), t;
            }
            function o(t, i, h) {
                return (t[0] = i[0] * h[0]), (t[1] = i[1] * h[1]), (t[2] = i[2] * h[2]), t;
            }
            function u(t, i, h) {
                return (t[0] = i[0] / h[0]), (t[1] = i[1] / h[1]), (t[2] = i[2] / h[2]), t;
            }
            function l(t, i, h) {
                return (t[0] = i[0] * h), (t[1] = i[1] * h), (t[2] = i[2] * h), t;
            }
            function g(t, i) {
                let h = i[0] - t[0],
                    s = i[1] - t[1],
                    r = i[2] - t[2];
                return Math.sqrt(h * h + s * s + r * r);
            }
            function c(t, i) {
                let h = i[0] - t[0],
                    s = i[1] - t[1],
                    r = i[2] - t[2];
                return h * h + s * s + r * r;
            }
            function M(t) {
                let i = t[0],
                    h = t[1],
                    s = t[2];
                return i * i + h * h + s * s;
            }
            function d(t, i) {
                return (t[0] = -i[0]), (t[1] = -i[1]), (t[2] = -i[2]), t;
            }
            function f(t, i) {
                return (t[0] = 1 / i[0]), (t[1] = 1 / i[1]), (t[2] = 1 / i[2]), t;
            }
            function p(t, i) {
                let h = i[0],
                    s = i[1],
                    r = i[2],
                    e = h * h + s * s + r * r;
                return e > 0 && (e = 1 / Math.sqrt(e)), (t[0] = i[0] * e), (t[1] = i[1] * e), (t[2] = i[2] * e), t;
            }
            function m(t, i) {
                return t[0] * i[0] + t[1] * i[1] + t[2] * i[2];
            }
            function x(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = h[0],
                    a = h[1],
                    o = h[2];
                return (t[0] = r * o - e * a), (t[1] = e * n - s * o), (t[2] = s * a - r * n), t;
            }
            function _(t, i, h, s) {
                let r = i[0],
                    e = i[1],
                    n = i[2];
                return (t[0] = r + s * (h[0] - r)), (t[1] = e + s * (h[1] - e)), (t[2] = n + s * (h[2] - n)), t;
            }
            function y(t, i, h, s, r) {
                let e = Math.exp(-s * r),
                    n = i[0],
                    a = i[1],
                    o = i[2];
                return (t[0] = h[0] + (n - h[0]) * e), (t[1] = h[1] + (a - h[1]) * e), (t[2] = h[2] + (o - h[2]) * e), t;
            }
            function C(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = h[3] * s + h[7] * r + h[11] * e + h[15];
                return (
                    (n = n || 1),
                    (t[0] = (h[0] * s + h[4] * r + h[8] * e + h[12]) / n),
                    (t[1] = (h[1] * s + h[5] * r + h[9] * e + h[13]) / n),
                    (t[2] = (h[2] * s + h[6] * r + h[10] * e + h[14]) / n),
                    t
                );
            }
            function w(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = h[3] * s + h[7] * r + h[11] * e + h[15];
                return (
                    (n = n || 1),
                    (t[0] = (h[0] * s + h[4] * r + h[8] * e) / n),
                    (t[1] = (h[1] * s + h[5] * r + h[9] * e) / n),
                    (t[2] = (h[2] * s + h[6] * r + h[10] * e) / n),
                    t
                );
            }
            function v(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2];
                return (t[0] = s * h[0] + r * h[3] + e * h[6]), (t[1] = s * h[1] + r * h[4] + e * h[7]), (t[2] = s * h[2] + r * h[5] + e * h[8]), t;
            }
            function q(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = h[0],
                    a = h[1],
                    o = h[2],
                    u = a * e - o * r,
                    l = o * s - n * e,
                    g = n * r - a * s,
                    c = a * g - o * l,
                    M = o * u - n * g,
                    d = n * l - a * u,
                    f = 2 * h[3];
                return (u *= f), (l *= f), (g *= f), (c *= 2), (M *= 2), (d *= 2), (t[0] = s + u + c), (t[1] = r + l + M), (t[2] = e + g + d), t;
            }
            h.d(i, {
                $A: () => x,
                Bw: () => s,
                C: () => r,
                Cc: () => _,
                DI: () => f,
                Io: () => g,
                Om: () => m,
                Qr: () => u,
                Re: () => a,
                S8: () => p,
                Sc: () => w,
                WQ: () => n,
                YO: () => y,
                Z0: () => C,
                ei: () => v,
                g7: () => A,
                gL: () => q,
                hG: () => c,
                hZ: () => e,
                hs: () => l,
                lw: () => o,
                m3: () => M,
                t2: () => Z,
                ze: () => d,
            });
            let A = (function () {
                let t = [0, 0, 0],
                    i = [0, 0, 0];
                return function (h, s) {
                    r(t, h), r(i, s), p(t, t), p(i, i);
                    let e = m(t, i);
                    return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e);
                };
            })();
            function Z(t, i) {
                return t[0] === i[0] && t[1] === i[1] && t[2] === i[2];
            }
        },
        81161: (t, i, h) => {
            h.d(i, { $: () => l });
            var s = h(70413);
            function r(t) {
                let i = t[0],
                    h = t[1],
                    s = t[2],
                    r = t[3],
                    e = t[4],
                    n = t[5],
                    a = t[6],
                    o = t[7],
                    u = t[8],
                    l = t[9],
                    g = t[10],
                    c = t[11],
                    M = t[12],
                    d = t[13],
                    f = t[14],
                    p = t[15];
                return (
                    (i * n - h * e) * (g * p - c * f) -
                    (i * a - s * e) * (l * p - c * d) +
                    (i * o - r * e) * (l * f - g * d) +
                    (h * a - s * n) * (u * p - c * M) -
                    (h * o - r * n) * (u * f - g * M) +
                    (s * o - r * a) * (u * d - l * M)
                );
            }
            function e(t, i, h) {
                let s = i[0],
                    r = i[1],
                    e = i[2],
                    n = i[3],
                    a = i[4],
                    o = i[5],
                    u = i[6],
                    l = i[7],
                    g = i[8],
                    c = i[9],
                    M = i[10],
                    d = i[11],
                    f = i[12],
                    p = i[13],
                    m = i[14],
                    x = i[15],
                    _ = h[0],
                    y = h[1],
                    C = h[2],
                    w = h[3];
                return (
                    (t[0] = _ * s + y * a + C * g + w * f),
                    (t[1] = _ * r + y * o + C * c + w * p),
                    (t[2] = _ * e + y * u + C * M + w * m),
                    (t[3] = _ * n + y * l + C * d + w * x),
                    (_ = h[4]),
                    (y = h[5]),
                    (C = h[6]),
                    (w = h[7]),
                    (t[4] = _ * s + y * a + C * g + w * f),
                    (t[5] = _ * r + y * o + C * c + w * p),
                    (t[6] = _ * e + y * u + C * M + w * m),
                    (t[7] = _ * n + y * l + C * d + w * x),
                    (_ = h[8]),
                    (y = h[9]),
                    (C = h[10]),
                    (w = h[11]),
                    (t[8] = _ * s + y * a + C * g + w * f),
                    (t[9] = _ * r + y * o + C * c + w * p),
                    (t[10] = _ * e + y * u + C * M + w * m),
                    (t[11] = _ * n + y * l + C * d + w * x),
                    (_ = h[12]),
                    (y = h[13]),
                    (C = h[14]),
                    (w = h[15]),
                    (t[12] = _ * s + y * a + C * g + w * f),
                    (t[13] = _ * r + y * o + C * c + w * p),
                    (t[14] = _ * e + y * u + C * M + w * m),
                    (t[15] = _ * n + y * l + C * d + w * x),
                    t
                );
            }
            function n(t, i) {
                let h = i[0],
                    s = i[1],
                    r = i[2],
                    e = i[4],
                    n = i[5],
                    a = i[6],
                    o = i[8],
                    u = i[9],
                    l = i[10];
                return (t[0] = Math.hypot(h, s, r)), (t[1] = Math.hypot(e, n, a)), (t[2] = Math.hypot(o, u, l)), t;
            }
            let a = (function () {
                let t = [1, 1, 1];
                return function (i, h) {
                    n(t, h);
                    let s = 1 / t[0],
                        r = 1 / t[1],
                        e = 1 / t[2],
                        a = h[0] * s,
                        o = h[1] * r,
                        u = h[2] * e,
                        l = h[4] * s,
                        g = h[5] * r,
                        c = h[6] * e,
                        M = h[8] * s,
                        d = h[9] * r,
                        f = h[10] * e,
                        p = a + g + f,
                        m = 0;
                    return (
                        p > 0
                            ? ((m = 2 * Math.sqrt(p + 1)), (i[3] = 0.25 * m), (i[0] = (c - d) / m), (i[1] = (M - u) / m), (i[2] = (o - l) / m))
                            : a > g && a > f
                              ? ((m = 2 * Math.sqrt(1 + a - g - f)), (i[3] = (c - d) / m), (i[0] = 0.25 * m), (i[1] = (o + l) / m), (i[2] = (M + u) / m))
                              : g > f
                                ? ((m = 2 * Math.sqrt(1 + g - a - f)), (i[3] = (M - u) / m), (i[0] = (o + l) / m), (i[1] = 0.25 * m), (i[2] = (c + d) / m))
                                : ((m = 2 * Math.sqrt(1 + f - a - g)), (i[3] = (o - l) / m), (i[0] = (M + u) / m), (i[1] = (c + d) / m), (i[2] = 0.25 * m)),
                        i
                    );
                };
            })();
            function o(t, i, h) {
                return (
                    (t[0] = i[0] + h[0]),
                    (t[1] = i[1] + h[1]),
                    (t[2] = i[2] + h[2]),
                    (t[3] = i[3] + h[3]),
                    (t[4] = i[4] + h[4]),
                    (t[5] = i[5] + h[5]),
                    (t[6] = i[6] + h[6]),
                    (t[7] = i[7] + h[7]),
                    (t[8] = i[8] + h[8]),
                    (t[9] = i[9] + h[9]),
                    (t[10] = i[10] + h[10]),
                    (t[11] = i[11] + h[11]),
                    (t[12] = i[12] + h[12]),
                    (t[13] = i[13] + h[13]),
                    (t[14] = i[14] + h[14]),
                    (t[15] = i[15] + h[15]),
                    t
                );
            }
            function u(t, i, h) {
                return (
                    (t[0] = i[0] - h[0]),
                    (t[1] = i[1] - h[1]),
                    (t[2] = i[2] - h[2]),
                    (t[3] = i[3] - h[3]),
                    (t[4] = i[4] - h[4]),
                    (t[5] = i[5] - h[5]),
                    (t[6] = i[6] - h[6]),
                    (t[7] = i[7] - h[7]),
                    (t[8] = i[8] - h[8]),
                    (t[9] = i[9] - h[9]),
                    (t[10] = i[10] - h[10]),
                    (t[11] = i[11] - h[11]),
                    (t[12] = i[12] - h[12]),
                    (t[13] = i[13] - h[13]),
                    (t[14] = i[14] - h[14]),
                    (t[15] = i[15] - h[15]),
                    t
                );
            }
            class l extends Array {
                constructor(t = 1, i = 0, h = 0, s = 0, r = 0, e = 1, n = 0, a = 0, o = 0, u = 0, l = 1, g = 0, c = 0, M = 0, d = 0, f = 1) {
                    return super(t, i, h, s, r, e, n, a, o, u, l, g, c, M, d, f), this;
                }
                get x() {
                    return this[12];
                }
                get y() {
                    return this[13];
                }
                get z() {
                    return this[14];
                }
                get w() {
                    return this[15];
                }
                set x(t) {
                    this[12] = t;
                }
                set y(t) {
                    this[13] = t;
                }
                set z(t) {
                    this[14] = t;
                }
                set w(t) {
                    this[15] = t;
                }
                set(t, i, h, s, r, e, n, a, o, u, l, g, c, M, d, f) {
                    return t.length
                        ? this.copy(t)
                        : ((this[0] = t),
                          (this[1] = i),
                          (this[2] = h),
                          (this[3] = s),
                          (this[4] = r),
                          (this[5] = e),
                          (this[6] = n),
                          (this[7] = a),
                          (this[8] = o),
                          (this[9] = u),
                          (this[10] = l),
                          (this[11] = g),
                          (this[12] = c),
                          (this[13] = M),
                          (this[14] = d),
                          (this[15] = f),
                          this);
                }
                translate(t, i = this) {
                    let h, s, r, e, n, a, o, u, l, g, c, M, d, f, p;
                    return (
                        (d = t[0]),
                        (f = t[1]),
                        (p = t[2]),
                        i === this
                            ? ((this[12] = i[0] * d + i[4] * f + i[8] * p + i[12]),
                              (this[13] = i[1] * d + i[5] * f + i[9] * p + i[13]),
                              (this[14] = i[2] * d + i[6] * f + i[10] * p + i[14]),
                              (this[15] = i[3] * d + i[7] * f + i[11] * p + i[15]))
                            : ((h = i[0]),
                              (s = i[1]),
                              (r = i[2]),
                              (e = i[3]),
                              (n = i[4]),
                              (a = i[5]),
                              (o = i[6]),
                              (u = i[7]),
                              (l = i[8]),
                              (g = i[9]),
                              (c = i[10]),
                              (M = i[11]),
                              (this[0] = h),
                              (this[1] = s),
                              (this[2] = r),
                              (this[3] = e),
                              (this[4] = n),
                              (this[5] = a),
                              (this[6] = o),
                              (this[7] = u),
                              (this[8] = l),
                              (this[9] = g),
                              (this[10] = c),
                              (this[11] = M),
                              (this[12] = h * d + n * f + l * p + i[12]),
                              (this[13] = s * d + a * f + g * p + i[13]),
                              (this[14] = r * d + o * f + c * p + i[14]),
                              (this[15] = e * d + u * f + M * p + i[15])),
                        this
                    );
                }
                rotate(t, i, h = this) {
                    let s, r, e, n, a, o, u, l, g, c, M, d, f, p, m, x, _, y, C, w, v, q, A, Z, Y, X, b, z;
                    return (
                        1e-6 > Math.abs((z = Math.hypot((Y = i[0]), (X = i[1]), (b = i[2])))) ||
                            ((Y *= z = 1 / z),
                            (X *= z),
                            (b *= z),
                            (s = Math.sin(t)),
                            (e = 1 - (r = Math.cos(t))),
                            (n = h[0]),
                            (a = h[1]),
                            (o = h[2]),
                            (u = h[3]),
                            (l = h[4]),
                            (g = h[5]),
                            (c = h[6]),
                            (M = h[7]),
                            (d = h[8]),
                            (f = h[9]),
                            (p = h[10]),
                            (m = h[11]),
                            (x = Y * Y * e + r),
                            (_ = X * Y * e + b * s),
                            (y = b * Y * e - X * s),
                            (C = Y * X * e - b * s),
                            (w = X * X * e + r),
                            (v = b * X * e + Y * s),
                            (q = Y * b * e + X * s),
                            (A = X * b * e - Y * s),
                            (Z = b * b * e + r),
                            (this[0] = n * x + l * _ + d * y),
                            (this[1] = a * x + g * _ + f * y),
                            (this[2] = o * x + c * _ + p * y),
                            (this[3] = u * x + M * _ + m * y),
                            (this[4] = n * C + l * w + d * v),
                            (this[5] = a * C + g * w + f * v),
                            (this[6] = o * C + c * w + p * v),
                            (this[7] = u * C + M * w + m * v),
                            (this[8] = n * q + l * A + d * Z),
                            (this[9] = a * q + g * A + f * Z),
                            (this[10] = o * q + c * A + p * Z),
                            (this[11] = u * q + M * A + m * Z),
                            h !== this && ((this[12] = h[12]), (this[13] = h[13]), (this[14] = h[14]), (this[15] = h[15]))),
                        this
                    );
                }
                scale(t, i = this) {
                    var h;
                    let s, r, e;
                    return (
                        (s = (h = 'number' == typeof t ? [t, t, t] : t)[0]),
                        (r = h[1]),
                        (e = h[2]),
                        (this[0] = i[0] * s),
                        (this[1] = i[1] * s),
                        (this[2] = i[2] * s),
                        (this[3] = i[3] * s),
                        (this[4] = i[4] * r),
                        (this[5] = i[5] * r),
                        (this[6] = i[6] * r),
                        (this[7] = i[7] * r),
                        (this[8] = i[8] * e),
                        (this[9] = i[9] * e),
                        (this[10] = i[10] * e),
                        (this[11] = i[11] * e),
                        (this[12] = i[12]),
                        (this[13] = i[13]),
                        (this[14] = i[14]),
                        (this[15] = i[15]),
                        this
                    );
                }
                add(t, i) {
                    return i ? o(this, t, i) : o(this, this, t), this;
                }
                sub(t, i) {
                    return i ? u(this, t, i) : u(this, this, t), this;
                }
                multiply(t, i) {
                    return (
                        t.length
                            ? i
                                ? e(this, t, i)
                                : e(this, this, t)
                            : ((this[0] = this[0] * t),
                              (this[1] = this[1] * t),
                              (this[2] = this[2] * t),
                              (this[3] = this[3] * t),
                              (this[4] = this[4] * t),
                              (this[5] = this[5] * t),
                              (this[6] = this[6] * t),
                              (this[7] = this[7] * t),
                              (this[8] = this[8] * t),
                              (this[9] = this[9] * t),
                              (this[10] = this[10] * t),
                              (this[11] = this[11] * t),
                              (this[12] = this[12] * t),
                              (this[13] = this[13] * t),
                              (this[14] = this[14] * t),
                              (this[15] = this[15] * t)),
                        this
                    );
                }
                identity() {
                    return (
                        (this[0] = 1),
                        (this[1] = 0),
                        (this[2] = 0),
                        (this[3] = 0),
                        (this[4] = 0),
                        (this[5] = 1),
                        (this[6] = 0),
                        (this[7] = 0),
                        (this[8] = 0),
                        (this[9] = 0),
                        (this[10] = 1),
                        (this[11] = 0),
                        (this[12] = 0),
                        (this[13] = 0),
                        (this[14] = 0),
                        (this[15] = 1),
                        this
                    );
                }
                copy(t) {
                    return (
                        (this[0] = t[0]),
                        (this[1] = t[1]),
                        (this[2] = t[2]),
                        (this[3] = t[3]),
                        (this[4] = t[4]),
                        (this[5] = t[5]),
                        (this[6] = t[6]),
                        (this[7] = t[7]),
                        (this[8] = t[8]),
                        (this[9] = t[9]),
                        (this[10] = t[10]),
                        (this[11] = t[11]),
                        (this[12] = t[12]),
                        (this[13] = t[13]),
                        (this[14] = t[14]),
                        (this[15] = t[15]),
                        this
                    );
                }
                fromPerspective({ fov: t, aspect: i, near: h, far: s } = {}) {
                    let r, e;
                    return (
                        (r = 1 / Math.tan(t / 2)),
                        (e = 1 / (h - s)),
                        (this[0] = r / i),
                        (this[1] = 0),
                        (this[2] = 0),
                        (this[3] = 0),
                        (this[4] = 0),
                        (this[5] = r),
                        (this[6] = 0),
                        (this[7] = 0),
                        (this[8] = 0),
                        (this[9] = 0),
                        (this[10] = (s + h) * e),
                        (this[11] = -1),
                        (this[12] = 0),
                        (this[13] = 0),
                        (this[14] = 2 * s * h * e),
                        (this[15] = 0),
                        this
                    );
                }
                fromOrthogonal({ left: t, right: i, bottom: h, top: s, near: r, far: e }) {
                    let n, a, o;
                    return (
                        (n = 1 / (t - i)),
                        (a = 1 / (h - s)),
                        (o = 1 / (r - e)),
                        (this[0] = -2 * n),
                        (this[1] = 0),
                        (this[2] = 0),
                        (this[3] = 0),
                        (this[4] = 0),
                        (this[5] = -2 * a),
                        (this[6] = 0),
                        (this[7] = 0),
                        (this[8] = 0),
                        (this[9] = 0),
                        (this[10] = 2 * o),
                        (this[11] = 0),
                        (this[12] = (t + i) * n),
                        (this[13] = (s + h) * a),
                        (this[14] = (e + r) * o),
                        (this[15] = 1),
                        this
                    );
                }
                fromQuaternion(t) {
                    let i, h, s, r, e, n, a, o, u, l, g, c, M, d, f, p;
                    return (
                        (i = t[0]),
                        (h = t[1]),
                        (s = t[2]),
                        (r = t[3]),
                        (e = i + i),
                        (n = h + h),
                        (a = s + s),
                        (o = i * e),
                        (u = h * e),
                        (l = h * n),
                        (g = s * e),
                        (c = s * n),
                        (M = s * a),
                        (d = r * e),
                        (f = r * n),
                        (p = r * a),
                        (this[0] = 1 - l - M),
                        (this[1] = u + p),
                        (this[2] = g - f),
                        (this[3] = 0),
                        (this[4] = u - p),
                        (this[5] = 1 - o - M),
                        (this[6] = c + d),
                        (this[7] = 0),
                        (this[8] = g + f),
                        (this[9] = c - d),
                        (this[10] = 1 - o - l),
                        (this[11] = 0),
                        (this[12] = 0),
                        (this[13] = 0),
                        (this[14] = 0),
                        (this[15] = 1),
                        this
                    );
                }
                setPosition(t) {
                    return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
                }
                inverse(t = this) {
                    let i, h, s, r, e, n, a, o, u, l, g, c, M, d, f, p, m, x, _, y, C, w, v, q, A, Z, Y, X, b;
                    return (
                        (i = t[0]),
                        (h = t[1]),
                        (s = t[2]),
                        (r = t[3]),
                        (e = t[4]),
                        (n = t[5]),
                        (a = t[6]),
                        (o = t[7]),
                        (u = t[8]),
                        (l = t[9]),
                        (g = t[10]),
                        (c = t[11]),
                        (M = t[12]),
                        (d = t[13]),
                        (f = t[14]),
                        (p = t[15]),
                        (m = i * n - h * e),
                        (x = i * a - s * e),
                        (_ = i * o - r * e),
                        (y = h * a - s * n),
                        (C = h * o - r * n),
                        (w = s * o - r * a),
                        (v = u * d - l * M),
                        (q = u * f - g * M),
                        (A = u * p - c * M),
                        (Z = l * f - g * d),
                        (Y = l * p - c * d),
                        (b = m * (X = g * p - c * f) - x * Y + _ * Z + y * A - C * q + w * v) &&
                            ((b = 1 / b),
                            (this[0] = (n * X - a * Y + o * Z) * b),
                            (this[1] = (s * Y - h * X - r * Z) * b),
                            (this[2] = (d * w - f * C + p * y) * b),
                            (this[3] = (g * C - l * w - c * y) * b),
                            (this[4] = (a * A - e * X - o * q) * b),
                            (this[5] = (i * X - s * A + r * q) * b),
                            (this[6] = (f * _ - M * w - p * x) * b),
                            (this[7] = (u * w - g * _ + c * x) * b),
                            (this[8] = (e * Y - n * A + o * v) * b),
                            (this[9] = (h * A - i * Y - r * v) * b),
                            (this[10] = (M * C - d * _ + p * m) * b),
                            (this[11] = (l * _ - u * C - c * m) * b),
                            (this[12] = (n * q - e * Z - a * v) * b),
                            (this[13] = (i * Z - h * q + s * v) * b),
                            (this[14] = (d * x - M * y - f * m) * b),
                            (this[15] = (u * y - l * x + g * m) * b)),
                        this
                    );
                }
                compose(t, i, h) {
                    return (
                        (function (t, i, h, s) {
                            let r = i[0],
                                e = i[1],
                                n = i[2],
                                a = i[3],
                                o = r + r,
                                u = e + e,
                                l = n + n,
                                g = r * o,
                                c = r * u,
                                M = r * l,
                                d = e * u,
                                f = e * l,
                                p = n * l,
                                m = a * o,
                                x = a * u,
                                _ = a * l,
                                y = s[0],
                                C = s[1],
                                w = s[2];
                            (t[0] = (1 - (d + p)) * y),
                                (t[1] = (c + _) * y),
                                (t[2] = (M - x) * y),
                                (t[3] = 0),
                                (t[4] = (c - _) * C),
                                (t[5] = (1 - (g + p)) * C),
                                (t[6] = (f + m) * C),
                                (t[7] = 0),
                                (t[8] = (M + x) * w),
                                (t[9] = (f - m) * w),
                                (t[10] = (1 - (g + d)) * w),
                                (t[11] = 0),
                                (t[12] = h[0]),
                                (t[13] = h[1]),
                                (t[14] = h[2]),
                                (t[15] = 1);
                        })(this, t, i, h),
                        this
                    );
                }
                decompose(t, i, h) {
                    return (
                        (function (t, i, h, e) {
                            let n = (0, s.Bw)([t[0], t[1], t[2]]),
                                o = (0, s.Bw)([t[4], t[5], t[6]]),
                                u = (0, s.Bw)([t[8], t[9], t[10]]);
                            0 > r(t) && (n = -n), (h[0] = t[12]), (h[1] = t[13]), (h[2] = t[14]);
                            let l = t.slice(),
                                g = 1 / n,
                                c = 1 / o,
                                M = 1 / u;
                            (l[0] *= g),
                                (l[1] *= g),
                                (l[2] *= g),
                                (l[4] *= c),
                                (l[5] *= c),
                                (l[6] *= c),
                                (l[8] *= M),
                                (l[9] *= M),
                                (l[10] *= M),
                                a(i, l),
                                (e[0] = n),
                                (e[1] = o),
                                (e[2] = u);
                        })(this, t, i, h),
                        this
                    );
                }
                getRotation(t) {
                    return a(t, this), this;
                }
                getTranslation(t) {
                    return (t[0] = this[12]), (t[1] = this[13]), (t[2] = this[14]), this;
                }
                getScaling(t) {
                    return n(t, this), this;
                }
                getMaxScaleOnAxis() {
                    let t, i, h, s, r, e, n, a, o;
                    return (
                        (t = this[0]),
                        (i = this[1]),
                        (h = this[2]),
                        (s = this[4]),
                        (r = this[5]),
                        (e = this[6]),
                        (n = this[8]),
                        Math.sqrt(Math.max(t * t + i * i + h * h, s * s + r * r + e * e, n * n + (a = this[9]) * a + (o = this[10]) * o))
                    );
                }
                lookAt(t, i, h) {
                    let s, r, e, n, a, o, u, l, g, c, M, d, f;
                    return (
                        (s = t[0]),
                        (r = t[1]),
                        (e = t[2]),
                        (n = h[0]),
                        (a = h[1]),
                        (o = h[2]),
                        0 == (c = (u = s - i[0]) * u + (l = r - i[1]) * l + (g = e - i[2]) * g) ? (g = 1) : ((u *= c = 1 / Math.sqrt(c)), (l *= c), (g *= c)),
                        0 == (c = (M = a * g - o * l) * M + (d = o * u - n * g) * d + (f = n * l - a * u) * f) &&
                            (o ? (n += 1e-6) : a ? (o += 1e-6) : (a += 1e-6), (c = (M = a * g - o * l) * M + (d = o * u - n * g) * d + (f = n * l - a * u) * f)),
                        (M *= c = 1 / Math.sqrt(c)),
                        (d *= c),
                        (f *= c),
                        (this[0] = M),
                        (this[1] = d),
                        (this[2] = f),
                        (this[3] = 0),
                        (this[4] = l * f - g * d),
                        (this[5] = g * M - u * f),
                        (this[6] = u * d - l * M),
                        (this[7] = 0),
                        (this[8] = u),
                        (this[9] = l),
                        (this[10] = g),
                        (this[11] = 0),
                        (this[12] = s),
                        (this[13] = r),
                        (this[14] = e),
                        (this[15] = 1),
                        this
                    );
                }
                determinant() {
                    return r(this);
                }
                fromArray(t, i = 0) {
                    return (
                        (this[0] = t[i]),
                        (this[1] = t[i + 1]),
                        (this[2] = t[i + 2]),
                        (this[3] = t[i + 3]),
                        (this[4] = t[i + 4]),
                        (this[5] = t[i + 5]),
                        (this[6] = t[i + 6]),
                        (this[7] = t[i + 7]),
                        (this[8] = t[i + 8]),
                        (this[9] = t[i + 9]),
                        (this[10] = t[i + 10]),
                        (this[11] = t[i + 11]),
                        (this[12] = t[i + 12]),
                        (this[13] = t[i + 13]),
                        (this[14] = t[i + 14]),
                        (this[15] = t[i + 15]),
                        this
                    );
                }
                toArray(t = [], i = 0) {
                    return (
                        (t[i] = this[0]),
                        (t[i + 1] = this[1]),
                        (t[i + 2] = this[2]),
                        (t[i + 3] = this[3]),
                        (t[i + 4] = this[4]),
                        (t[i + 5] = this[5]),
                        (t[i + 6] = this[6]),
                        (t[i + 7] = this[7]),
                        (t[i + 8] = this[8]),
                        (t[i + 9] = this[9]),
                        (t[i + 10] = this[10]),
                        (t[i + 11] = this[11]),
                        (t[i + 12] = this[12]),
                        (t[i + 13] = this[13]),
                        (t[i + 14] = this[14]),
                        (t[i + 15] = this[15]),
                        t
                    );
                }
            }
        },
    },
]);
