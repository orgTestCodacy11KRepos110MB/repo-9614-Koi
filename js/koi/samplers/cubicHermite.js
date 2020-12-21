/**
 * A cubic hermite spline
 * @param {Vector2[]} points The points on this spline
 * @constructor
 */
const CubicHermite = function(points) {
    this.points = points;
};

/**
 * The interpolation formula
 * @param {Number} a The first value
 * @param {Number} b The second value
 * @param {Number} c The third value
 * @param {Number} d The fourth value
 * @param {Number} t The sample to interpolate in the range [0, 1]
 * @returns {Number} The interpolated value
 */
CubicHermite.prototype.interpolate = function(a, b, c, d, t) {
    const A = a * -.5 + (3 * b ) * .5 - (3 * c) * .5 + d * .5;
    const B = a - (5 * b) * .5 + 2 * c - d * .5;
    const C = a * -.5 + c * .5;

    return A * t * t * t + B * t * t + C * t + b;
};

/**
 * Sample the
 * @param {Vector2} vector The vector to store the sample in
 * @param {Number} t The distance on the curve in the range [0, 1]
 */
CubicHermite.prototype.sample = function(vector, t) {
    const lastPoint = this.points.length - 1;
    const i1 = Math.floor(lastPoint * t);
    const i0 = Math.max(i1 - 1, 0);
    const i2 = Math.min(i1 + 1, lastPoint);
    const i3 = Math.min(i2 + 1, lastPoint);
    const f = lastPoint * t - i1;

    vector.x = this.interpolate(this.points[i0].x, this.points[i1].x, this.points[i2].x, this.points[i3].x, f);
    vector.y = this.interpolate(this.points[i0].y, this.points[i1].y, this.points[i2].y, this.points[i3].y, f);
};

/**
 * Get the start point of this spline
 * @returns {Vector2} The start point
 */
CubicHermite.prototype.getStart = function() {
    return this.points[0];
};

/**
 * Get the end point of this spline
 * @returns {Vector2} The end point
 */
CubicHermite.prototype.getEnd = function() {
    return this.points[this.points.length - 1];
};